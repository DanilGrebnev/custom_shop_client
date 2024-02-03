import { type FC } from 'react'
import clsx from 'clsx'
import s from './BasketPage.module.scss'

interface IBasketPageProps {
    className?: string
}

export const BasketPage: FC<IBasketPageProps> = (props) => {
    const { className } = props

    return (
        <div className={clsx(s.BasketPage, className)}>
            <h1>Basket</h1>
        </div>
    )
}

BasketPage.displayName = 'BasketPage'
