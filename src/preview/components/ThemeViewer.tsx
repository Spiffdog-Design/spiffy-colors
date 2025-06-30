import { Theme } from '../../types/Color';
import { PaletteViewer } from './PaletteViewer';

export interface ThemeViewerProps {
    themeName: string;
    theme: Theme;
}

export const ThemeViewer = ({ themeName, theme }: ThemeViewerProps) => {
    return (
        <div style={{ height: 450 }}>
            {Object.keys(theme).map((key) => (
                <PaletteViewer themeName={themeName} name={key} palette={theme[key]} />
            ))}
        </div>
    );
};
