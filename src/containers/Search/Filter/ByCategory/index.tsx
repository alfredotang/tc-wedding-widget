import React, { useContext, useState } from 'react'
import { SearchContext } from '@/src/containers/Search/Context'

export const ByCategory: React.FC = () => {
  const { state, dispatch } = useContext(SearchContext)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SEARCH_BY_CATEGORY', payload: event.target.value })
  }

  return (
    <div>
      <select
        className="appearance-none placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-4 shadow-sm focus:outline-none  sm:text-sm hover:cursor-pointer"
        onChange={handleChange}
        value={state.category}
      >
        <option value="">Search by category</option>
        {state.tableStateDraft.map(item => (
          <option key={item.id} value={item.category}>
            {item.category}
          </option>
        ))}
      </select>
    </div>
  )
}
