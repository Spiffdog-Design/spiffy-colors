import { palette } from '../../palette';
import { ColorViewer } from './ColorViewer';

export interface PaletteViewerProps {
  name: string;
}

export const PaletteViewer = ({ name }: PaletteViewerProps) => {
  const steps = Object.keys(palette[name])
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div style={{ fontWeight: 700, fontSize: '.9rem', textTransform: 'uppercase' }}>{name}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: 16,
          padding: 8,
        }}
      >
        {steps.map((step) => (
          <ColorViewer key={`${name}-${step}`} paletteName={name} step={step} />
        ))}
      </div>
    </div>
  );
};
