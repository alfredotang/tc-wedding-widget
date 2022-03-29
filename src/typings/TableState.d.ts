type TableItem = {
  id: string
  key: string
  value: string
  needBabySeat: boolean
  notSure: boolean
}

type TableList = {
  id: string
  tableName: string
  tableId: string
  category: string
  tableItem: TableItem[]
  peopleCount: number
  babyCount: number
}

type TableState = TableList[]
