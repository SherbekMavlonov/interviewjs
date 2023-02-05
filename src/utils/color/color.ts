import {Appearance, ColorSchemeName} from 'react-native';

import {colors, ColorScheme, ColorToken} from '@styles/colors';

export const isValidColorScheme = (
  scheme: ColorSchemeName,
): scheme is ColorScheme => {
  if (scheme) {
    return Object.keys(ColorScheme).includes(scheme.toUpperCase());
  }
  return false;
};

export const getDynamicColor = (colorToken: ColorToken): string => {
  const colorScheme = Appearance.getColorScheme();
  if (isValidColorScheme(colorScheme)) {
    return colors[colorToken][colorScheme];
  }
  return colors[colorToken].light;
};
