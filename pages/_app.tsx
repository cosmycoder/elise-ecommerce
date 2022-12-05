import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
      </Head> */}
      <ChakraProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
