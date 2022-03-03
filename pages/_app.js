import '../styles/globals.css';
import Head from 'next/head';
import Link from "next/link";

import WillyThemeProvider from '../utils/WillyThemeProvider';
import CursorDefault from '../comps/CursorDefault';
import MouseContextProvider from '../utils/MouseContext';

function MyApp({ Component, pageProps }) {
  return (
    <WillyThemeProvider>
      <MouseContextProvider>
        <CursorDefault />
        <Head>
          <title>William Laurel Alvarez - Web / Mobile Developer</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta 
            name="title" 
            content="William Laurel Alvarez - Web / Mobile Developer" 
          />
          <meta 
            name="description" 
            content="The craft of William Laurel Alvarez, a web and mobile react developer & designer based in Vancouver, Canada" 
          />
          <link
              rel="preload"
              href="../public/fonts/cartograph.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="../public/fonts/consolas.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="../public/fonts/cartograph_extralight.ttf"
              as="font"
              crossOrigin=""
          />
        </Head>
        <Component {...pageProps} />
      </MouseContextProvider>
    </WillyThemeProvider>
  )
}

export default MyApp;
