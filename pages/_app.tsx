/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { CartProvider } from '../context/cartContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FavoriteProvider } from '../context/favoritesContext'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>
      <UserProvider>
        <FavoriteProvider>
          <QueryClientProvider client={queryClient}>
            <CartProvider>
              <ChakraProvider>
                <CSSReset />
                <Component {...pageProps} />
              </ChakraProvider>
            </CartProvider>
          </QueryClientProvider>
        </FavoriteProvider>
      </UserProvider>
    </>
  )
}
