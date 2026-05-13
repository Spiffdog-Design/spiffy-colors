import { palette } from '../../palette';
import { cssCustomPropertyName } from '../utility';
import { PaletteViewer } from './PaletteViewer';

export const ThemeViewer = () => {
  return (
    <div
      style={{
        colorScheme: 'light dark',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 16,
        backgroundColor: cssVarRef('gray', 12),
        color: cssVarRef('gray', 1),
      }}
    >
      {Object.keys(palette).map((key) => (
        <PaletteViewer key={key} name={key} />
      ))}
    </div>
  );
};

/** @param {string} paletteName @param {number} step */
function cssVarRef(paletteName: string, step: number) {
  return `var(${cssCustomPropertyName(paletteName, step)})`;
}
