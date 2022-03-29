import { useContext } from 'react'
import { TableList } from '@/src/containers/Search/TableList'
import { Status } from '@/src/containers/Search/Status'
import { Filter } from '@/src/containers/Search/Filter'
import { SearchContext } from '@/src/containers/Search/Context'

export const SearchContainer: React.FC = () => {
  const { state } = useContext(SearchContext)
  return (
    <div className="flex flex-col justify-center items-center space-y-8 p-4 md:p-10 ">
      <Filter />
      <Status />
      <section className="flex flex-wrap w-full">
        {state.tableState.map(item => (
          <TableList key={item.id} {...item} />
        ))}
      </section>
    </div>
  )
}
