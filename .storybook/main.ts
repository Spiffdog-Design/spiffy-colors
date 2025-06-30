import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
        '@chromatic-com/storybook',
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    core: {
        disableTelemetry: true,
    },

    async viteFinal(config) {
        return {
            ...config,
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, '../src'), // Add more aliases as needed
                },
            },
        };
    },

    docs: {
        autodocs: true
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
