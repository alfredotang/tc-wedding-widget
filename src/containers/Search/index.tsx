import { useContext } from 'react'
import { TableList } from '@/src/containers/Search/TableList'
import { Status } from '@/src/containers/Search/Status'
import { Filter } from '@/src/containers/Search/Filter'
import { SearchContext, SearchProvider } from '@/src/containers/Search/Context'

const Search: React.FC = () => {
  const { state } = useContext(SearchContext)
  return (
    <div className="flex flex-col justify-center items-center space-y-8 p-4 md:p-10 ">
      <Filter />
      <Status />
      <section className="flex flex-wrap">
        {state.guestList.map(guest => (
          <TableList key={guest.name} {...guest} />
        ))}
      </section>
    </div>
  )
}

export const SearchContainer: React.FC = () => {
  return (
    <SearchProvider>
      <Search />
    </SearchProvider>
  )
}
