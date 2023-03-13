import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { router } from '@/constants/router';
import { GlobalStyle } from '@/GlobalStyles';
import { theme } from '@/theme/theme';

export const Application = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />{' '}
  </ThemeProvider>
);
