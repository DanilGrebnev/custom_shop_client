'use client'

import { type FC } from 'react'
import s from './Button.module.scss'

interface IButtonProps {
    className?: string
}

export const Button: FC<IButtonProps> = (props) => {
    const { className } = props

    return (
        <button
            className={s.button}
            onClick={() => document.location.reload()}>
            Reload page
        </button>
    )
}

Button.displayName = 'Button'
