import type { Dispatch } from 'react'
import { createContext, useReducer, useMemo } from 'react'
import { produce, createDraft } from 'immer'
import { pinyin } from 'pinyin-pro'

export type State = {
  tableState: TableState
  tableStateDraft: TableState
  category: string
  searchTarget: string
}

export type Action =
  | { type: 'SEARCH_BY_CATEGORY'; payload: string }
  | { type: 'SEARCH_BY_NAME'; payload: string }
  | { type: 'CLEAR_SEARCH_CONDITION' }

const makeContext = (tableState: TableState) => {
  const tableStateDraft = createDraft(tableState)
  const initialState: State = {
    tableState,
    tableStateDraft,
    category: '',
    searchTarget: '',
  }

  const initialStateDaft = createDraft(initialState)

  const searchByName = (searchTarget: string) => {
    if (!searchTarget) return tableStateDraft
    const transformToPinyin = pinyin(searchTarget).toLowerCase()

    const result = tableStateDraft.filter(item => {
      const matched = item.tableItem.filter(val => {
        return val.key.toLowerCase().includes(transformToPinyin)
      })
      return matched.length > 0
    })
    return result
  }

  const searchByCategory = (category: string) => {
    if (!category) return tableStateDraft
    return tableStateDraft.filter(item => item.category === category)
  }

  const reducer = produce((daft, action: Action) => {
    switch (action.type) {
      case 'SEARCH_BY_CATEGORY':
        const category = action.payload
        daft.category = category
        daft.tableState = searchByCategory(category)
        return
      case 'SEARCH_BY_NAME':
        const searchTarget = action.payload
        daft.searchTarget = searchTarget
        daft.tableState = searchByName(searchTarget)
        return
      case 'CLEAR_SEARCH_CONDITION':
        return initialStateDaft
      default:
        throw new Error('action type is not defined')
    }
  }, initialStateDaft)

  return {
    initialState,
    reducer,
  }
}

export const SearchContext = createContext<{ state: State; dispatch: Dispatch<Action> }>({
  state: {
    tableState: [],
    tableStateDraft: [],
    category: '',
    searchTarget: '',
  },
  dispatch: () => null,
})

type Props = {
  tableState: TableState
}
export const SearchProvider: React.FC<Props> = ({ children, tableState }) => {
  const { reducer, initialState } = useMemo(
    () => makeContext(tableState),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(tableState)]
  )
  const [state, dispatch] = useReducer(reducer, initialState)
  return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>
}
