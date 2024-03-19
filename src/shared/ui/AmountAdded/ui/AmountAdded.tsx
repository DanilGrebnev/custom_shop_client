'use client'

import { FC, memo } from 'react'

import { useToggleTheme } from '@/app/providers/ThemeProvider'

import s from './AmountAdded.module.scss'

import clsx from 'clsx'

interface IAmountAddedProps {
    className?: string
    increment: () => void
    decrement: () => void
    value: string | number
    disabled1?: boolean
    disabled2?: boolean
    disabled?: boolean
}

export const AmountAdded: FC<IAmountAddedProps> = memo((props) => {
    const {
        decrement,
        increment,
        disabled1,
        disabled2,
        value = 1,
        className,
        disabled,
    } = props
    const { theme } = useToggleTheme()

    return (
        <div className={clsx(s.AmountAdded, s[theme], className)}>
            <button
                onClick={decrement}
                disabled={disabled2 || disabled}
                type="button">
                -
            </button>
            <span className={s.value}>{value}</span>
            <button
                disabled={disabled1 || disabled}
                onClick={increment}
                type="button">
                +
            </button>
        </div>
    )
})

AmountAdded.displayName = 'AmountAdded'
