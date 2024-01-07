import { type FC, memo } from 'react'
import { IFilterItem } from '@/app/types/filters'
import { FilterListItem } from '../FilterListItem/FilterListItem'
import { FilterRangeItem } from '../FilterRangeItem/FilterRangeItem'
import { v4 } from 'uuid'

interface IFilterListProps {
    filters: IFilterItem[]
}

export const FiltersList: FC<IFilterListProps> = memo((props) => {
    const { filters } = props

    return (
        <>
            {filters?.map((filterItem) => {
                return filterItem.type === 'number' ? (
                    <FilterRangeItem
                        key={v4()}
                        filterItem={filterItem}
                    />
                ) : (
                    <FilterListItem
                        key={v4()}
                        filterItem={filterItem}
                    />
                )
            })}
        </>
    )
})

FiltersList.displayName = 'FiltersList'
