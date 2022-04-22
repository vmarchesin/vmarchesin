import React from 'react';
import NextHead from 'next/head';

const Head: React.FC = () => {
  return (
    <NextHead>
      <title>vmarches.in</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="description" content="Vinicius Marchesin Araujo - Engineering Manager & Developer" />


      <meta property="og:url" content="https://vmarches.in/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="vmarches.in" />
      <meta property="og:description" content="Vinicius Marchesin Araujo - Engineering Manager & Developer" />
      <meta property="og:image" content="https://vmarches.in/og-share.png" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="vmarches.in" />
      <meta property="twitter:url" content="https://vmarches.in/" />
      <meta name="twitter:title" content="vmarches.in" />
      <meta name="twitter:description" content="Vinicius Marchesin Araujo - Engineering Manager & Developer" />
      <meta name="twitter:image" content="https://vmarches.in/og-share-twitter.png" />
    </NextHead>
  );
};

export default Head;
