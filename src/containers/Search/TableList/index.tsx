import { Tag } from '@/src/components/Tag'

type Props = GuestsItem

const ItemTag: React.FC<{ needBabySeat?: boolean; confirm?: boolean }> = ({
  needBabySeat = false,
  confirm = true,
}) => {
  if (!needBabySeat && confirm) return null
  if (needBabySeat) return <Tag variant="info">baby</Tag>
  return <Tag variant="error">un confirm</Tag>
}

export const TableList: React.FC<Props> = ({ name, tableId, list }) => {
  return (
    <div className="w-[160px] mb-8">
      <div className="space-y-4 mb-6">
        <h1 className="text-lg">Table: {tableId}</h1>
        <h2 className="text-md">{name}</h2>
      </div>
      <ul className="space-y-4">
        {list.map((item, index) => {
          return (
            <li key={tableId + item.key + index} className="flex items-center">
              <div className="mr-2">{item.value}</div>
              <ItemTag confirm={item.confirm} needBabySeat={item.needBabySeat} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
