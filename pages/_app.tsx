import 'theme/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';

import Head from 'components/head';
import GithubCorner from 'components/github-corner';
import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <GithubCorner />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
