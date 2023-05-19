import '@/styles/globals.css'
import Layout from "../layouts/Layout";
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../context/auth-context';
export default function App({ Component, pageProps }) {
  return(
    // <CacheProvider>
      // <ChakraProvider>
      <AuthProvider>
        <Layout>
          
          <Component {...pageProps} />
          
        </Layout>
      </AuthProvider>
      // </ChakraProvider>
      
    // </CacheProvider>
 )
}
