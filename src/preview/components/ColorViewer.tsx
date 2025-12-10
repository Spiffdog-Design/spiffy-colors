import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';
import { Color } from '../../types/Color';

import imageFile from '../../assets/checkers.png';

export interface ColorViewerProps {
    color: Color;
    index: number;
    name: string;
    themeName: string;
}
export const ColorViewer = ({ color, index, name, themeName }: ColorViewerProps) => (
    <Provider delayDuration={0}>
        <Root>
            <Trigger asChild>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateRows: '40px auto',
                        gap: 8,
                        alignItems: 'center',
                        justifyItems: 'center',
                    }}
                >
                    <div style={{ background: `url(${imageFile})` }}>
                        <div
                            style={{
                                height: 40,
                                width: 40,
                                backgroundColor: color,
                                border: `1px solid oklab(from ${color} ${
                                    themeName === 'dark' ? 'calc(l + .1)' : 'calc(l - .075)'
                                } a b)`,
                            }}
                        ></div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontWeight: 700,
                            justifyContent: 'center',
                        }}
                    >
                        {index + 1}
                    </div>
                </div>
            </Trigger>
            <Portal>
                <Content sideOffset={10} style={tooltipContentStyle}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr',
                            columnGap: 8,
                            rowGap: 16,
                            padding: 16,
                        }}
                    >
                        <strong>Color:</strong>
                        <code>{color}</code>
                        <strong>JS/TS variable:</strong>
                        <code>{`${themeName}.${name}[${index + 1}]`}</code>
                        <strong>CSS variable:</strong>
                        <code>{`--${name}${index + 1}`}</code>
                        <strong>Preview:</strong>
                        <div style={{ background: `url(${imageFile})`, height: 40, width: 40 }}>
                            <div style={{ height: 40, width: 40, backgroundColor: color }}></div>
                        </div>
                    </div>
                </Content>
            </Portal>
        </Root>
    </Provider>
);

const tooltipContentStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: 8,
    fontFamily: 'sans-serif',
    padding: 8,
};
const tooltipPanelStyle = {};
