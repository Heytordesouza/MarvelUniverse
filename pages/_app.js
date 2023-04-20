import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react'   

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
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;