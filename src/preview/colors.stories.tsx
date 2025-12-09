import { dark, light } from '../';

import { Theme } from '../types/Color';
import { ThemeViewer, ThemeViewerProps } from './components/ThemeViewer';

const themes: Record<string, Theme> = {
    dark: dark,
    light: light,
};

const meta = {
    title: 'Themes',
    argTypes: {
        themeName: {
            options: ['dark', 'light'],
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
