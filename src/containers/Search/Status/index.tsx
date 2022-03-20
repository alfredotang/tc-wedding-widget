import { UN_CONFIRM_LIST, BABY_LIST, TOTAL } from '@/src/constants/guests'
import { StatusList } from '@/src/containers/Search/Status/StatusList'
import { Collapse } from '@/src/components/Collapse'

const renderList = [
  {
    source: BABY_LIST,
    title: 'Baby seat',
  },
  {
    source: UN_CONFIRM_LIST,
    title: 'Un Confirm',
  },
]

export const Status: React.FC = () => {
  return (
    <Collapse title={`Total: ${TOTAL}`}>
      <div className="flex">
        {renderList.map(item => (
          <StatusList key={item.title} source={item.source} title={item.title} />
        ))}
      </div>
    </Collapse>
  )
}
