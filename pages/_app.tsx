import 'theme/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { useKonami } from 'react-konami-code';

import Head from 'components/head';
import GithubCorner from 'components/github-corner';
import { ToastySlideIn, useToasty } from 'components/toasty';
import theme from 'theme';



function MyApp({ Component, pageProps }: AppProps) {
  const { toasty, playingToasty } = useToasty(1500);
  useKonami(toasty);

  return (
    <ThemeProvider theme={theme}>
      <Head />
      <ToastySlideIn show={playingToasty} />
      <GithubCorner />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
