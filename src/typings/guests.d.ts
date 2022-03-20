type TableListItem = {
  key: string
  value: string
  confirm: boolean
  needBabySeat: boolean
  companions: number
}

type GuestsItem = {
  name: string
  tableId: number
  category: string
  list: TableListItem[]
}

type Guests = GuestsItem[]
