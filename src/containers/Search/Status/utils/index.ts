export const getTotalCount = (tableState: TableState) => {
  return tableState.reduce((collection, item) => collection + item.peopleCount, 0)
}

export const getBabyList = (tableState: TableState) => {
  return tableState.reduce((collection: TableItem[], { tableItem }) => {
    const babyList = tableItem.filter(val => val.needBabySeat)
    return collection.concat(babyList)
  }, [])
}

export const getNotSureList = (tableState: TableState) => {
  return tableState.reduce((collection: TableItem[], { tableItem }) => {
    const notSureList = tableItem.filter(val => val.notSure)
    return collection.concat(notSureList)
  }, [])
}
