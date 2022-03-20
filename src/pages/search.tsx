import type { NextPage } from 'next'
import { SearchContainer } from '@/src/containers/Search'
import { SEO } from '@/src/components/SEO'

const Search: NextPage = () => {
  return (
    <div>
      <SEO />
      <SearchContainer />
    </div>
  )
}

export default Search
