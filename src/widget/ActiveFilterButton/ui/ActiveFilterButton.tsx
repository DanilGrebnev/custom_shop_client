'use client'

import { memo } from 'react'

import { productActions } from '@/entities/product'

import CrossIcon from '@/shared/assets/cross.svg'
import { useAppDispatch } from '@/shared/hooks'
import { FilterButton } from '@/shared/ui/Buttons/ui/FilterButton'

import { useToggleTheme } from '@/app/providers/ThemeProvider'

import s from './ActiveFilterButton.module.scss'

import clsx from 'clsx'

interface IProps {
    label: string
    id: string
    className?: string
}

export const ActiveFilterButton = memo((props: IProps) => {
    const { id, label, className } = props

    const dispatch = useAppDispatch()

    const deleteFilter = (id: string) => {
        // dispatch(productActions.changeCheckedValue({ id, checked: false }))
    }

    return (
        <FilterButton
            className={className}
            title={`Удалить фильтр ${label}`}
            onClick={deleteFilter.bind(null, id)}
            label={label}>
            {label}
        </FilterButton>
    )
})

ActiveFilterButton.displayName = 'ActiveFilterButton'
