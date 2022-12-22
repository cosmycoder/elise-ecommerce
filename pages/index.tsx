import { HomePage } from '../src/components/HomePage'
import Layout from '../src/components/Layout'
import { ScrollToTop } from '../src/components/ScrollToTop'

export default function Index() {
  return (
    <Layout title={'Home - Elise'}>
      <HomePage />
      <ScrollToTop />
    </Layout>
  )
}
