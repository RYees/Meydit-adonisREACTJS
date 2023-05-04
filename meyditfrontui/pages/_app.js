import '@/styles/globals.css'
import Layout from "../layouts/Layout";
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return(
    // <CacheProvider>
      // <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      // </ChakraProvider>
    // </CacheProvider>
 )
}
