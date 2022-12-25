import { useRouter } from 'next/router'
import Layout from '../../src/components/Layout'
import { ScrollToTop } from '../../src/components/ScrollToTop'
import { ProductDetails } from '../../src/components/ShoppingCart/ProductDetails'

export default function Index() {
  const router = useRouter()
  const { id } = router.query
  const itemId = parseInt(id as string)

  return (
    <Layout title={'Product Details - Elise'}>
      <ProductDetails id={itemId} />
      <ScrollToTop />
    </Layout>
  )
}
