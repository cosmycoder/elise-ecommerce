import { Favorites } from '../src/components/Favorites/Favorites'
import Layout from '../src/components/Layout'
import { ScrollToTop } from '../src/components/ScrollToTop'

export default function Index() {
  return (
    <Layout>
      <Favorites />
      <ScrollToTop />
    </Layout>
  )
}
