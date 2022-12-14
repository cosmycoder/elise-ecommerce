import { HomePage } from '../src/components/HomePage'
import Layout from '../src/components/Layout'
import { ScrollToTop } from '../src/components/ScrollToTop'

export default function Index() {
  return (
    <Layout>
      <HomePage />
      <ScrollToTop />
    </Layout>
  )
}
