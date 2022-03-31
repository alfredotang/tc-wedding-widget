import React, { useContext } from 'react'
import uniqBy from 'lodash/fp/uniqBy'
import pipe from 'lodash/fp/pipe'
import map from 'lodash/fp/map'
import { SearchContext } from '@/src/containers/Search/Context'
import { Select, SelectOption } from '@/src/components/Select'

export const ByCategory: React.FC = () => {
  const { state, dispatch } = useContext(SearchContext)

  const handleChange = (value: string) => {
    dispatch({ type: 'SEARCH_BY_CATEGORY', payload: value })
  }

  const categories = pipe(
    map(({ category, id }: TableList) => ({ category, id })),
    uniqBy(item => item.category)
  )(state.tableStateDraft)

  return (
    <div>
      <Select onChange={handleChange} value={state.category} placeholder="Search by category">
        {categories.map(item => (
          <SelectOption key={item.id} value={item.category}>
            {item.category}
          </SelectOption>
        ))}
      </Select>
    </div>
  )
}
