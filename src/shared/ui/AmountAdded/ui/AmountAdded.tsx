'use client'

import { FC } from 'react'
import clsx from 'clsx'
import s from './AmountAdded.module.scss'

interface IAmountAddedProps {
    className?: string
    increment: () => void
    decrement: () => void
    value: string | number
}

export const AmountAdded: FC<IAmountAddedProps> = (props) => {
    const { decrement, increment, value = 1, className } = props

    return (
        <div className={clsx(s.AmountAdded, className)}>
            <button
                onClick={decrement}
                type="button">
                -
            </button>
            {value}
            <button
                onClick={increment}
                type="button">
                +
            </button>
        </div>
    )
}

AmountAdded.displayName = 'AmountAdded'
