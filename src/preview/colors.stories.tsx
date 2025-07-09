import { dark, darkOkLab, light, lightOkLab } from '../';

import { Theme } from '../types/Color';
import { ThemeViewer, ThemeViewerProps } from './components/ThemeViewer';

const themes: Record<string, Theme> = {
    dark: dark,
    darkOkLab: darkOkLab,
    light: light,
    lightOkLab: lightOkLab,
};

const meta = {
    title: 'Themes',
    argTypes: {
        themeName: {
            options: ['dark', 'darkOkLab', 'light', 'lightOkLab'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        themeName: 'dark',
    },

    render: (args: ThemeViewerProps) => <ThemeViewer themeName={args.themeName} theme={themes[`${args.themeName}`]} />,
};
