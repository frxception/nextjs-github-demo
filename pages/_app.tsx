import '@styles/globals.css'

/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
      </Head>
          <Component {...pageProps} />

    </>
  );
};

export default MyApp;
