
/** @param {string} paletteName @param {number} step */
export function cssCustomPropertyName(paletteName: string, step: number) {
    return `--${toCssCasing(paletteName)}${step}`;
}

/** @param {string} paletteName @param {number} step */
export function cssVarRef(paletteName: string, step: number) {
    return `var(--${toCssCasing(paletteName)}${step})`;
}

/** @param {string} str */
export function toCssCasing(str: string): string {
    return str
        .replace(/([a-z])(\d)/, '$1-$2')
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase();
}