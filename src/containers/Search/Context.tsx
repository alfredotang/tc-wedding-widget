import type { Dispatch } from 'react'
import { createContext, useReducer } from 'react'
import { produce, createDraft } from 'immer'
import { GUESTS } from '@/src/constants/guests'
import { pinyin } from 'pinyin-pro'

export type State = {
  guestList: Guests
  category: string
  searchTarget: string
}

export type Action =
  | { type: 'SEARCH_BY_CATEGORY'; payload: string }
  | { type: 'SEARCH_BY_NAME'; payload: string }
  | { type: 'CLEAR_SEARCH_CONDITION' }

const initialState: State = {
  guestList: GUESTS,
  category: '',
  searchTarget: '',
}

const initialStateDaft = createDraft(initialState)
const guestListDraft = createDraft(GUESTS)

const searchByName = (searchTarget: string) => {
  if (!searchTarget) return guestListDraft
  const transformToPinyin = pinyin(searchTarget).toLowerCase()

  const result = guestListDraft.filter(item => {
    const matched = item.list.filter(val => {
      return val.key.toLowerCase().includes(transformToPinyin)
    })
    return matched.length > 0
  })
  return result
}

const searchByCategory = (category: string) => {
  if (!category) return guestListDraft
  return guestListDraft.filter(item => item.category === category)
}

const reducer = produce((daft, action: Action) => {
  switch (action.type) {
    case 'SEARCH_BY_CATEGORY':
      const category = action.payload
      daft.category = category
      daft.guestList = searchByCategory(category)
      return
    case 'SEARCH_BY_NAME':
      const searchTarget = action.payload
      daft.searchTarget = searchTarget
      daft.guestList = searchByName(searchTarget)
      return
    case 'CLEAR_SEARCH_CONDITION':
      return initialStateDaft
    default:
      throw new Error('action type is not defined')
  }
}, initialStateDaft)

export const SearchContext = createContext<{ state: State; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
})

export const SearchProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>
}
