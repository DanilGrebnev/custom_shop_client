import { type FC } from 'react'
import clsx from 'clsx'
import s from './BuyButton.module.scss'
import { IButton } from '../types'

export const BuyButton: FC<IButton> = (props) => {
    const { className } = props

    return <button className={clsx(s.BuyButton, className)}>Купить</button>
}

BuyButton.displayName = 'BuyButton'
