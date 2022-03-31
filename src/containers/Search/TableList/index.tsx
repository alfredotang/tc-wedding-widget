import { useRouter } from 'next/router'
import { Tag } from '@/src/components/Tag'

type Props = TableList

const ItemTag: React.FC<{ needBabySeat?: boolean; notSure?: boolean }> = ({
  needBabySeat = false,
  notSure = false,
}) => {
  if (!needBabySeat && !notSure) return null
  if (needBabySeat) return <Tag variant="info">baby</Tag>
  return <Tag variant="error"> not sure </Tag>
}

export const TableList: React.FC<Props> = ({
  tableId,
  tableItem,
  tableName,
  peopleCount,
  babyCount,
}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/search/${tableId}`)
  }

  return (
    <div
      className="mb-8 p-4 mx-2 shadow-md w-full rounded hover:shadow-xl md:w-[156px] hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="space-y-4 mb-6">
        <h1 className="text-lg">Table: {tableId}</h1>
        <h2 className="text-md">{tableName}</h2>
        <h2 className="text-md space-x-4">
          <span>Total: {peopleCount}</span>
          <span>Baby: {babyCount}</span>
        </h2>
      </div>
      <ul className="space-y-4">
        {tableItem.map(item => {
          return (
            <li key={item.id} className="flex items-center">
              <div className="mr-2">{item.value}</div>
              <ItemTag needBabySeat={item.needBabySeat} notSure={item.notSure} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
