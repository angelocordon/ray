import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import MainNavigation from 'navigation/MainNavigation';
import theme from 'styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <MainNavigation />
  </ThemeProvider>
);

export default App;
