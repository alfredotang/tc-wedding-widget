import { useContext } from 'react'
import { SearchContext } from '@/src/containers/Search/Context'

type Props = {
  title: string
  source: TableListItem[]
}

export const StatusList: React.FC<Props> = ({ source, title }) => {
  const { state, dispatch } = useContext(SearchContext)

  const handleFindPerson = (person: TableListItem) => {
    dispatch({ type: 'SEARCH_BY_NAME', payload: person.value })
  }

  return (
    <div className="w-[160px] h-[200px] space-y-3">
      <h2 className="text-md">
        {title}: {source.length}
      </h2>
      <ul className="space-y-3">
        {source.map((item, index) => (
          <li key={item.key + index}>
            <span
              className="cursor-pointer hover:underline underline-offset-2"
              onClick={() => handleFindPerson(item)}
            >
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
