type TableItem = {
  id: string
  key: string
  value: string
  needBabySeat: boolean
  notSure: boolean
}

type TableList = {
  id: string
  tableName: any
  tableId: any
  category: any
  tableItem: TableItem[]
  peopleCount: number
  babyCount: number
}

type TableState = TableList[]
