const fs = require('fs');
const path = require('path');
const allColorScales = require('../dist/index');

const outputDir = require('../tsconfig.json').compilerOptions.outDir;

const combinedLight = [];
const combinedDark = [];

Object.keys(allColorScales).forEach((key) => {
    const isDark = String(key).toLowerCase().includes('dark');

    const filepath = path.join(outputDir, toFileName(key) + '.css');
    const colors = allColorScales[key];

    const srgbValues = Object.keys(colors)
        .sort()
        .reduce(
            (a, k) => ({
                ...a,
                [k]: colors[k],
            }),
            {},
        );

    const srgbCssProperties = Object.entries(srgbValues)
        .map(([name, value]) => [toCssCasing(name), value])
        .map(([name, value]) =>
            Object.keys(value)
                .map((v, i) => `\t--${name}${i + 1}: ${value[i + 1]};`)
                .join('\n'),
        )
        .join('\n\n');

    const rootRule = `:root {\n${srgbCssProperties}\n}`;
    const cssOutput = isDark ? `@media (prefers-color-scheme: dark) {\n${rootRule}\n}` : rootRule;

    fs.writeFileSync(filepath, cssOutput);

    // Collect for combined index.css
    const labeledProperties = `/* ${key} */\n${srgbCssProperties}`;
    if (isDark) {
        combinedDark.push(labeledProperties);
    } else {
        combinedLight.push(labeledProperties);
    }
});

// Build a combined index.css that contains light (default) and dark media query
const indexSections = [];
if (combinedLight.length) {
    indexSections.push(`:root {\n${combinedLight.join('\n\n')}\n}`);
}
if (combinedDark.length) {
    indexSections.push(`@media (prefers-color-scheme: dark) {\n:root {\n${combinedDark.join('\n\n')}\n}\n}`);
}

if (indexSections.length) {
    const indexCss = indexSections.join('\n\n');
    fs.writeFileSync(path.join(outputDir, 'index.css'), indexCss);
}

function toCssCasing(str) {
    return str
        .replace(/([a-z])(\d)/, '$1-$2')
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase();
}

function toFileName(str) {
    return toCssCasing(str).replace(/-a$/, '-alpha');
}
