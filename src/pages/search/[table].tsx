import type { NextPage } from 'next'
import { SearchTableContainer } from '@/src/containers/SearchTable'
import { SEO } from '@/src/components/SEO'

const SearchTable: NextPage = () => {
  return (
    <div>
      <SEO />
      <SearchTableContainer />
    </div>
  )
}

export default SearchTable
