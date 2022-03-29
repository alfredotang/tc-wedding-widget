import { useContext, useCallback, useMemo } from 'react'
import { SearchContext } from '@/src/containers/Search/Context'
import { Button } from '@/src/components/Button'
import { ByName } from '@/src/containers/Search/Filter/ByName'
import { ByCategory } from '@/src/containers/Search/Filter/ByCategory'

export const Filter: React.FC = () => {
  const { dispatch } = useContext(SearchContext)
  const handleClearSearchCondition = useCallback(() => {
    dispatch({ type: 'CLEAR_SEARCH_CONDITION' })
  }, [dispatch])

  return useMemo(() => {
    return (
      <section>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-3 basis-3/4">
            <div className="basis-1/2">
              <ByName />
            </div>
            <div className="basis-1/2">
              <ByCategory />
            </div>
          </div>
          <div className="basis-1/4">
            <Button onClick={handleClearSearchCondition}>Clear</Button>
          </div>
        </div>
      </section>
    )
  }, [handleClearSearchCondition])
}
