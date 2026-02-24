import { Palette } from '../../types/Color';
import { ColorViewer } from './ColorViewer';

export interface PaletteViewerProps {
    name: string;
    palette: Palette;
    themeName: string;
}

export const PaletteViewer = ({ name, palette, themeName }: PaletteViewerProps) => {
    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <div style={{ fontWeight: 700, fontSize: '.9rem', textTransform: 'uppercase' }}>{name}</div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: `row`,
                    justifyContent: 'flex-start',
                    gap: 16,
                    padding: 8,
                }}
            >
                {Object.keys(palette).map((color: string, idx: number) => (
                    <ColorViewer
                        key={`${name}-${color}`}
                        themeName={themeName}
                        color={palette[Number(color)]}
                        index={idx}
                        name={name}
                    />
                ))}
            </div>
        </div>
    );
};
