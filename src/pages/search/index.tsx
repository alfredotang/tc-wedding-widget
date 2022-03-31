import type { NextPage } from 'next'
import { SearchContainer } from '@/src/containers/Search'
import { SEO } from '@/src/components/SEO'
import { getWeddingTable } from '@/src/services/getWeddingTable'
import { SearchProvider } from '@/src/containers/Search/Context'
import { Empty } from '@/src/components/Empty'

type Props = {
  tableState: TableState | undefined
}

const Search: NextPage<Props> = ({ tableState }) => {
  return (
    <div>
      <SEO />
      {tableState && tableState.length > 0 ? (
        <SearchProvider tableState={tableState}>
          <SearchContainer />
        </SearchProvider>
      ) : (
        <Empty />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const tableState = await getWeddingTable()
  return {
    props: {
      tableState,
    },
  }
}

export default Search
