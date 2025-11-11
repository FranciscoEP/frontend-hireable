/* eslint-disable react/prop-types */
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import coolTheme from '../theme';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={coolTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
