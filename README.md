# Usage

`npm install @spiffdog/spiffy-colors`

This package exposes a single OKLab-based palette for both light and dark appearance using the CSS `light-dark()` function.

## CSS

- Import **`dist/index.css`**. It defines one `:root` block that:
  1. Sets **`color-scheme: light dark`** so the browser can resolve `light-dark()` and form controls / scrollbars match the active scheme.
  2. Declares palette variables such as `--gray1`, `--blue12`, etc. Each value is `light-dark(<light-oklab>, <dark-oklab>)`.

If you **do not** import this stylesheet but still use the tokens (for example from the JS export in your own CSS-in-JS or shadow DOM), you **must** set an appropriate `color-scheme` on an ancestor (commonly `:root` / `html`)—for example `light dark` when following system light/dark, or `light` / `dark` when forcing one appearance—otherwise `light-dark()` may not resolve as intended. See [MDN: `light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) and [`color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme).

## Javascript / Typescript

- **`palette`** — one `Theme` object in [`src/palette.ts`](src/palette.ts); each leaf is a CSS color string using `light-dark(...)`, suitable for `color`, `background`, and other properties in supporting browsers.

Typings are included (`dist/types` / emitted declarations alongside the build).

# Documentation

OKLab scales and previews live on the documentation site:

[Documentation](https://spiffdog-design.github.io/spiffy-colors/)
