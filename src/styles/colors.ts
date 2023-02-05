export enum ColorToken {}

export enum ColorScheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Colors = {
  [colorToken in ColorToken]: {
    [colorScheme in ColorScheme]: string;
  };
};

export const colors: Colors = {};
