'use client'

import { ChangeEvent, type FC } from 'react'
import { IFilterItem } from '@/app/types/filters'
import { RangeFilter } from '@/shared/ui/RangeFilter'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { getSearchProductParams } from '@/entities/searchProductParams'
import { searchProductParamsActions } from '@/entities/searchProductParams'
import { debounce } from '@/shared/lib/debounce'

interface IFilterRangeItemProps {
    filterItem: IFilterItem
}

export const FilterRangeItem: FC<IFilterRangeItemProps> = (props) => {
    const { filterItem } = props

    const dispatch = useAppDispatch()
    const { setUSP } = searchProductParamsActions

    const usp = useAppSelector(getSearchProductParams)
    const uspInstance = new URLSearchParams(usp.toString())

    const onChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
        uspInstance.set(e.target.name, e.target.value)
        if (!e.target.value) {
            uspInstance.delete(e.target.name)
        }
        dispatch(setUSP(uspInstance.toString()))
    }, 1000)

    return (
        <div id={'Filter-Sidebar__' + filterItem.code}>
            <h2>
                {filterItem.label}, {filterItem.measure}
            </h2>
            <RangeFilter
                onChange={onChange}
                filterItem={filterItem}
            />
        </div>
    )
}

FilterRangeItem.displayName = 'FilterRangeItem'
