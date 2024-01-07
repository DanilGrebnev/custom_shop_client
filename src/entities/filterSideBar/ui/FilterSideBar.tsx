'use client'

import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import { fetchSidebarFilters } from '../model/services/fetchSidebarFilters'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { FilterSideBarSelector } from '../model/selectors/filterSideBarSelector'
import { FiltersList } from './components/FiltersList/FiltersList'
import { FilterSideBarSkeleton } from '@/shared/ui/Skeletons/FilterSideBarSkeleton'

// import mock from '@/mock/mock'
import s from './FilterSideBar.module.scss'

export const FilterSideBar: FC = (props) => {
    const filters = useAppSelector(FilterSideBarSelector.getFilters)
    const isLoading = useAppSelector(FilterSideBarSelector.getIsLoading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSidebarFilters())
    }, [dispatch])

    return (
        <div
            id="Filter-Sidebar"
            className={s.FilterSideBar}>
            {isLoading && <FilterSideBarSkeleton />}
            <FiltersList filters={filters} />
        </div>
    )
}

FilterSideBar.displayName = 'FilterSideBar'
