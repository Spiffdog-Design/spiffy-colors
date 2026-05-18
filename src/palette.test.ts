import { describe, expect, it } from 'vitest';

import { palette } from './palette';

describe('palette', () => {
  it('stores each scale step as light-dark(...)', () => {
    expect(palette.gray[1]).toMatch(/^light-dark\(/);
    expect(palette.gray[12]).toMatch(/^light-dark\(/);
  });

  it('has twelve steps per named scale', () => {
    for (const name of Object.keys(palette)) {
      const steps = Object.keys(palette[name])
        .map(Number)
        .sort((a, b) => a - b);
      expect(steps).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    }
  });
});
