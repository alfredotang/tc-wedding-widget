import type { GoogleSpreadsheetRow } from 'google-spreadsheet'
import { pinyin } from 'pinyin-pro'
import { nanoid } from 'nanoid'
import pipe from 'lodash/fp/pipe'

const mapGuestStatus = (list: string[]): TableItem[] =>
  list.map(item => {
    const babyKey = '(baby)'
    const notSureKey = '(not sure)'
    let name = item.trim()
    let needBabySeat = false
    let notSure = false
    if (item.includes(babyKey)) {
      name = item.replace(babyKey, '').trim()
      needBabySeat = true
    }

    if (item.includes(notSureKey)) {
      name = name.replace(notSureKey, '').trim()
      notSure = true
    }

    return {
      id: nanoid(),
      key: pinyin(name),
      value: name,
      needBabySeat,
      notSure,
    }
  })

const mapTableItems = (list: string[]): TableItem[] => {
  return pipe(mapGuestStatus)(list)
}

const mapTableState = (data: any[]): TableState => {
  return data.map((item: string[]) => {
    const [tableName, tableId, category, ...list] = item
    const tableItem = mapTableItems(list)
    const babyCount = tableItem.filter(item => item.needBabySeat).length
    return {
      id: nanoid(),
      tableName,
      tableId,
      category,
      tableItem,
      peopleCount: tableItem.length,
      babyCount,
    }
  })
}

const sortTableList = (list: TableState) => {
  return list.sort((a, b) => a.tableId - b.tableId)
}

export const mapWeddingTableList = (source: GoogleSpreadsheetRow[]): TableState => {
  const data: string[] = source.map(item => item._rawData)
  return pipe(mapTableState, sortTableList)(data)
}
