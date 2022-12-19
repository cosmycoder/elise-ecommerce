import { Box } from '@chakra-ui/react'
import Layout from '../src/components/Layout'
import { ScrollToTop } from '../src/components/ScrollToTop'
import { ShoppingCart } from '../src/components/ShoppingCart/ShoppingCart'

export default function Index() {
  return (
    <Layout>
      <ShoppingCart />
      <ScrollToTop />
    </Layout>
  )
}
