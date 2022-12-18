/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { CartProvider } from '../context/cartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <ChakraProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ChakraProvider>
      </CartProvider>
    </>
  )
}
