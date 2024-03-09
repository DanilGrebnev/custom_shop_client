'use client'

import { memo } from 'react'

import { productActions } from '@/entities/product'

import CrossIcon from '@/shared/assets/cross.svg'
import { useAppDispatch } from '@/shared/hooks'

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
    const { theme } = useToggleTheme()

    const dispatch = useAppDispatch()

    const deleteFilter = (id: string) => {
        dispatch(productActions.changeCheckedValue({ id, checked: false }))
    }

    return (
        <button
            title={`Удалить фильтр ${label}`}
            onClick={deleteFilter.bind(null, id)}
            className={clsx(s.filter, s[theme], className)}>
            <span className={s.description}>{label}</span>
            <div className={s['cross-wrapper']}>
                <CrossIcon className={s['cross-icon']} />
            </div>
        </button>
    )
})

ActiveFilterButton.displayName = 'ActiveFilterButton'
