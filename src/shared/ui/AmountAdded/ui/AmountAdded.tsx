'use client'

import { FC } from 'react'

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
}

export const AmountAdded: FC<IAmountAddedProps> = (props) => {
    const {
        decrement,
        increment,
        disabled1,
        disabled2,
        value = 1,
        className,
    } = props
    const { theme } = useToggleTheme()

    return (
        <div className={clsx(s.AmountAdded, s[theme], className)}>
            <button
                onClick={decrement}
                disabled={disabled2}
                type="button">
                -
            </button>
            <span className={s.value}>{value}</span>
            <button
                disabled={disabled1}
                onClick={increment}
                type="button">
                +
            </button>
        </div>
    )
}

AmountAdded.displayName = 'AmountAdded'
