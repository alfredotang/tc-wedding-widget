import type { CompositionEvent } from 'react'
import { useContext, useRef, useEffect, useMemo, useCallback } from 'react'
import { SearchContext } from '@/src/containers/Search/Context'

export const ByName: React.FC = () => {
  const { state, dispatch } = useContext(SearchContext)
  const searchRef = useRef<HTMLInputElement>(null)
  const isInputComposingRef = useRef(false)

  const handleSearchByName = () => {
    const searchTarget = searchRef?.current?.value || ''
    if (isInputComposingRef.current) return
    dispatch({ type: 'SEARCH_BY_NAME', payload: searchTarget })
  }

  const handleCompositionEvent = (event: CompositionEvent<HTMLInputElement>) => {
    if (event.type === 'compositionend') {
      isInputComposingRef.current = false
      handleSearchByName()
      return
    }
    isInputComposingRef.current = true
  }

  useEffect(() => {
    if (!searchRef.current) return
    if (state.searchTarget !== searchRef.current.value) {
      searchRef.current.value = state.searchTarget
    }
  }, [state.searchTarget])

  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-slate-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm"
        placeholder="Search name"
        type="text"
        name="search"
        onChange={handleSearchByName}
        ref={searchRef}
        onCompositionStart={handleCompositionEvent}
        onCompositionUpdate={handleCompositionEvent}
        onCompositionEnd={handleCompositionEvent}
      />
    </label>
  )
}
