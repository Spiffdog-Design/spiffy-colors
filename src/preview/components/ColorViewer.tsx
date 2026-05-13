import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';

import { cssCustomPropertyName, cssVarRef } from '../utility';
import imageFile from '../../assets/checkers.png';

export interface ColorViewerProps {
  paletteName: string;
  step: number;
}

export const ColorViewer = ({ paletteName, step }: ColorViewerProps) => {
  const varRef = cssVarRef(paletteName, step);
  const propName = cssCustomPropertyName(paletteName, step);
  const borderColor = `color-mix(in srgb, ${varRef}, var(--${paletteName}1) 72%)`;

  return (
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
                  backgroundColor: varRef,
                  border: `1px solid ${borderColor}`,
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
              {step}
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
              <strong>CSS variable:</strong>
              <code>{propName}</code>
              <strong>Token:</strong>
              <code>{`${paletteName}[${step}]`}</code>
              <strong>Preview:</strong>
              <div style={{ background: `url(${imageFile})`, height: 40, width: 40 }}>
                <div style={{ height: 40, width: 40, backgroundColor: varRef }}></div>
              </div>
            </div>
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};

const tooltipContentStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #ccc',
  borderRadius: 8,
  fontFamily: 'sans-serif',
  padding: 8,
};

