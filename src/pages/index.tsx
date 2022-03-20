import type { NextPage } from 'next'
import { HomeContainer } from '@/src/containers/Home'
import { SEO } from '@/src/components/SEO'

const Home: NextPage = () => {
  return (
    <div>
      <SEO />
      <HomeContainer />
    </div>
  )
}

export default Home
