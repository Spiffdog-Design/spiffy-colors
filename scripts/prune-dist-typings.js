/**
 * Removes typings and folders that should not ship with the library (leftover from
 * older builds or emitted before tsconfig.build exclusions).
 */
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '../dist');

// Fresh clones / CI have no dist yet; rollup creates it. Nothing to prune.
if (!fs.existsSync(dist)) {
  process.exit(0);
}

function rm(p) {
  const full = path.join(dist, p);
  if (!fs.existsSync(full)) return;
  fs.rmSync(full, { recursive: true, force: true });
}

rm('preview');

for (const name of fs.readdirSync(dist, { withFileTypes: true })) {
  if (!name.isFile()) continue;
  if (
    name.name.endsWith('.test.d.ts') ||
    name.name.endsWith('.spec.d.ts') ||
    name.name === 'themeToIndexCss.d.ts'
  ) {
    fs.unlinkSync(path.join(dist, name.name));
  }
}
