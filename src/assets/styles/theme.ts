import { DefaultTheme } from 'styled-components/native';

// https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f
const colors = {
  lightWhite: '#F4F1DE', // eggshell
  lightOrange: '#E07A5F', // terra cotta
  darkBlue: '#3D405B', // independence
  lightGreen: '#81B29A', // green sheen
  lightYellow: '#F2CC8F', // deep champagne
};

type Colors = typeof colors;

declare module 'styled-components' {
  interface DefaultTheme {
    colors: Colors;
  }
}

const theme: DefaultTheme = {
  colors,
};

export default theme;
