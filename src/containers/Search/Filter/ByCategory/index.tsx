import React, { useContext } from 'react'
import uniqBy from 'lodash/fp/uniqBy'
import pipe from 'lodash/fp/pipe'
import map from 'lodash/fp/map'
import { SearchContext } from '@/src/containers/Search/Context'

export const ByCategory: React.FC = () => {
  const { state, dispatch } = useContext(SearchContext)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SEARCH_BY_CATEGORY', payload: event.target.value })
  }

  const categories = pipe(
    map(({ category, id }: TableList) => ({ category, id })),
    uniqBy(item => item.category)
  )(state.tableStateDraft)

  return (
    <div>
      <select
        className="appearance-none placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-4 shadow-sm focus:outline-none  sm:text-sm hover:cursor-pointer"
        onChange={handleChange}
        value={state.category}
      >
        <option value="">Search by category</option>
        {categories.map(item => (
          <option key={item.id} value={item.category}>
            {item.category}
          </option>
        ))}
      </select>
    </div>
  )
}
