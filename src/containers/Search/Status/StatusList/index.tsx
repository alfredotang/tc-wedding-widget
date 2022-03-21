import { useContext, useMemo, useCallback } from 'react'
import { SearchContext } from '@/src/containers/Search/Context'

type Props = {
  title: string
  source: TableItem[]
}

export const StatusList: React.FC<Props> = ({ source, title }) => {
  const { dispatch } = useContext(SearchContext)

  const handleFindPerson = useCallback(
    (person: TableItem) => {
      dispatch({ type: 'SEARCH_BY_NAME', payload: person.value })
    },
    [dispatch]
  )

  return useMemo(() => {
    return (
      <div className="w-[160px] h-[200px] space-y-3">
        <h2 className="text-md">
          {title}: {source.length}
        </h2>
        <ul className="space-y-3">
          {source.map(item => (
            <li key={item.id}>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleFindPerson, JSON.stringify(source), title])
}
