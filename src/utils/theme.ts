import { colors } from './colors';
import { fontSizes, fontWeight } from './fonts';
import { dimensions } from './dimensions';

export const theme = {
  colors,
  fontSizes,
  fontWeight,
  dimensions,
};

export type ThemeType = typeof theme;
