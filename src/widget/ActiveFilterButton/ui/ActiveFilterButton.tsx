'use client'

import { memo } from 'react'

import { ProductSelectors, productActions } from '@/entities/product'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { FilterButton } from '@/shared/ui/Buttons/ui/FilterButton'

import { isChoiceFilter, isRangeFilter } from '@/app/types/product'

interface Props {
    label: string
    id: string
    className?: string
    slug: string
}

export const ActiveFilterButton = memo((props: Props) => {
    const { id, label, slug, className } = props
    const dispatch = useAppDispatch()

    const currentFilter = useAppSelector((state) =>
        ProductSelectors.getFilterBySlug(state, slug)
    )

    const deleteFilter = () => {
        if (!currentFilter) return
        if (isChoiceFilter(currentFilter)) {
            dispatch(productActions.toggleChecked({ id, slug }))
        }
    }

    return (
        <FilterButton
            className={className}
            title={`Удалить фильтр ${label}`}
            onClick={deleteFilter}
            label={label}>
            {label}
        </FilterButton>
    )
})

ActiveFilterButton.displayName = 'ActiveFilterButton'
