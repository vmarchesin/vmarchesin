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
    </NextHead>
  );
};

export default Head;
