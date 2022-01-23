import '../styles/globals.css';
import Head from 'next/head';
import Link from "next/link";

import WillyThemeProvider from '../utils/WillyThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <WillyThemeProvider>
      <Head>
        <title>William Laurel Alvarez - Full Stack Developer</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="title" 
          content="William Laurel Alvarez - Full Stack Developer" 
        />
        <meta 
          name="description" 
          content="The practice of William Laurel Alvarez, a full stack mobile and web developer and 
          a graduate of the Digital Design and Development program at BCIT" 
        />
        <link
            rel="preload"
            href="../public/fonts/consolas.ttf"
            as="font"
            crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </WillyThemeProvider>
  )
}

export default MyApp;
