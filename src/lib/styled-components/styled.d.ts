// Extend types for DefaultTheme, which ships empty by default. This allows us
// to take advantage of TS intellisense when using theme values in a
// styled-component.
// Also see Ambient Module:
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightWhite: string;
      lightOrange: string;
      darkBlue: string;
      lightGreen: string;
      lightYellow: string;
    };
  }
}
