const fs = require("fs");
const path = require("path");
const allColorScales = require("../dist/index");

const outputDir = require("../tsconfig.json").compilerOptions.outDir;

Object
  .keys(allColorScales)
  .forEach((key) => {
    let selector = (key.includes("dark")) ? ".dark, .dark-theme" : ":root, .light, .light-theme";

    const filepath = path.join(outputDir, toFileName(key) + ".css");
    const colors = allColorScales[key];

    const srgbValues = Object.keys(colors).sort().reduce((a, k) => ({
      ...a,
      [k]: colors[k]
    }), {});

    const srgbCssProperties = Object.entries(srgbValues)
      .map(([name, value]) => [toCssCasing(name), value])
      .map(([name, value]) => Object.keys(value).map((v, i) => `\t--${name}${i+1}: ${value[i+1]};`).join("\n"))
      .join("\n\n");
    const srgbCssRule = `${selector} {\n${srgbCssProperties}\n}`;

    fs.writeFileSync(filepath, srgbCssRule);
  });

function toCssCasing(str) {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
}

function toFileName(str) {
  return toCssCasing(str).replace(/-a$/, "-alpha");
}
