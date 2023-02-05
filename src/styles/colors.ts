export enum ColorToken {
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  GRAY_1 = 'GRAY_1',
  GRAY_2 = 'GRAY_2',
  GRAY_3 = 'GRAY_3',
  WHITE = 'WHITE',
  RED = 'RED',
}

export enum ColorScheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Colors = {
  [colorToken in ColorToken]: {
    [colorScheme in ColorScheme]: string;
  };
};

export const colors: Colors = {
  [ColorToken.BLUE]: {
    [ColorScheme.DARK]: '',
    [ColorScheme.LIGHT]: '#3C8AFF',
  },
  [ColorToken.YELLOW]: {
    [ColorScheme.DARK]: '',
    [ColorScheme.LIGHT]: '#FECF16',
  },
  [ColorToken.GRAY_1]: {
    [ColorScheme.DARK]: '',
    [ColorScheme.LIGHT]: '#9FA8B2',
  },
  [ColorToken.GRAY_2]: {
    [ColorScheme.DARK]: '',
    [ColorScheme.LIGHT]: '#787F88',
  },
  [ColorToken.GRAY_3]: {
    [ColorScheme.DARK]: '',
    [ColorScheme.LIGHT]: '#626971',
  },
  [ColorToken.WHITE]: {
    [ColorScheme.DARK]: '',
    [ColorScheme.LIGHT]: '#F0F0F0',
  },
  [ColorToken.RED]: {
    [ColorScheme.DARK]: '',
    [ColorScheme.LIGHT]: '#FF004E',
  },
};
