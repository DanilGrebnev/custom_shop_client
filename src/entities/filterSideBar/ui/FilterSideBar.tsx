'use client'

import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from 'react'
import { fetchSidebarFilters } from '../model/services/fetchSidebarFilters'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { FilterSideBarSelector } from '../model/selectors/filterSideBarSelector'
import { FiltersList } from './components/FiltersList/FiltersList'
import { FilterSideBarSkeleton } from '@/shared/ui/Skeletons/FilterSideBarSkeleton'

import s from './FilterSideBar.module.scss'

export const FilterSideBar = () => {
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
            {isLoading ? (
                <FilterSideBarSkeleton />
            ) : (
                <FiltersList filters={filters} />
            )}
        </div>
    )
}

export default FilterSideBar

FilterSideBar.displayName = 'FilterSideBar'
