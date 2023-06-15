import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react'   
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <Head>
            <title>Universo Marvel</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
          </Head>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
