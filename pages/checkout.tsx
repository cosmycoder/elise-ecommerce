import { Checkout } from '../src/components/Checkout/Checkout'
import Layout from '../src/components/Layout'
import { ScrollToTop } from '../src/components/ScrollToTop'

export default function Index() {
  return (
    <Layout title={'Checkout - Elise'}>
      <Checkout />
      <ScrollToTop />
    </Layout>
  )
}
