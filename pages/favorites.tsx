import { Favorites } from '../src/components/Favorites/Favorites'
import Layout from '../src/components/Layout'
import { ScrollToTop } from '../src/components/ScrollToTop'

export default function Index() {
  return (
    <Layout title={'Favorites - Elise'}>
      <Favorites />
      <ScrollToTop />
    </Layout>
  )
}
