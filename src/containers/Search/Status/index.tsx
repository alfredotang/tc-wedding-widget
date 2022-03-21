import { useContext, useMemo } from 'react'
import { StatusList } from '@/src/containers/Search/Status/StatusList'
import { Collapse } from '@/src/components/Collapse'
import { SearchContext } from '@/src/containers/Search/Context'
import { getTotalCount, getBabyList, getNotSureList } from '@/src/containers/Search/Status/utils'

const renderList = ({
  babeList,
  notSureList,
}: {
  babeList: TableItem[]
  notSureList: TableItem[]
}) => [
  {
    source: babeList,
    title: 'baby seat',
  },
  {
    source: notSureList,
    title: 'not sure',
  },
]

export const Status: React.FC = () => {
  const { state } = useContext(SearchContext)
  const totalCount = getTotalCount(state.tableStateDraft)
  const babeList = getBabyList(state.tableStateDraft)
  const notSureList = getNotSureList(state.tableStateDraft)

  return useMemo(() => {
    return (
      <Collapse title={`Total: ${totalCount}`}>
        <div className="flex">
          {renderList({ babeList, notSureList }).map(item => (
            <StatusList key={item.title} source={item.source} title={item.title} />
          ))}
        </div>
      </Collapse>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(babeList), JSON.stringify(notSureList), totalCount])
}
