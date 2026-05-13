/**
 * Build helpers: CSS custom property naming and serializing a theme to `dist/index.css`.
 */
function toCssCasing(str) {
  return str
    .replace(/([a-z])(\d)/, '$1-$2')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase();
}

/**
 * Serializes a theme to the contents of `index.css`: one `:root` block with
 * `color-scheme: light dark` first, then custom properties.
 * @param {Record<string, Record<number, string>>} theme
 */
function themeToIndexCss(theme) {
  const sortedNames = Object.keys(theme).sort();
  const blocks = [];
  for (const name of sortedNames) {
    const scale = theme[name];
    const cssName = toCssCasing(name);
    const steps = Object.keys(scale)
      .map(Number)
      .sort((a, b) => a - b);
    const props = steps.map((step) => `\t--${cssName}${step}: ${scale[step]};`).join('\n');
    blocks.push(props);
  }
  const inner = blocks.join('\n\n');
  return `:root {\n\tcolor-scheme: light dark;\n\n${inner}\n}`;
}

module.exports = {
  toCssCasing,
  themeToIndexCss,
};
