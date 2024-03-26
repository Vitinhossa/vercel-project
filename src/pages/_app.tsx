/*eslint-disable */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/utils/theme';
import MainContainer from '@/components/atoms/MainContainer';
import NextNProgress from "nextjs-progressbar";
import { AuthProvider, ProtectRoute } from '../contexts/auth';
import '@/styles/global.css';
import '@/styles/icon.css';
import 'loaders.css/loaders.css';
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-boleto-reader/dist/index.css'; /** The default styles. It's optional. */
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import dynamic from 'next/dynamic';
 


export default function App({ Component, pageProps }: AppProps) {

  const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
  return (
    <>
      {/* <GlobalStyle /> */}
      <Head>
        <link rel="icon" href="/icone10x.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />

        <meta name="application-name" content="PixLand" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="PWA PixLand Internet Banking" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#212926" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#212926" />
        <script src="https://sdkweb-lib.idwall.co/index.js"></script>


        <title>PixLand</title>
      </Head>
      <ThemeProvider theme={theme}>
        <MainContainer>
        <AuthProvider>
          <ProtectRoute>
            <NextNProgress
              color="#ff7c05"
              startPosition={0.3}
              stopDelayMs={200}
              height={4}
              showOnShallow={true}
            />
            <AlertProvider template={AlertTemplate} {...options}>
            <div data-idw-sdk-web></div>
            <Component {...pageProps} />
            </AlertProvider>
          </ProtectRoute>
        </AuthProvider>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
