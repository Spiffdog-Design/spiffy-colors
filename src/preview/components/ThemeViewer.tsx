import { Theme } from '../../types/Color';
import { PaletteViewer } from './PaletteViewer';

export interface ThemeViewerProps {
    themeName: string;
    theme: Theme;
}

export const ThemeViewer = ({ themeName, theme }: ThemeViewerProps) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                padding: 16,
                backgroundColor: theme.gray[12],
                color: theme.gray[1],
            }}
        >
            {Object.keys(theme).map((key) => (
                <PaletteViewer key={key} themeName={themeName} name={key} palette={theme[key]} />
            ))}
        </div>
    );
};
