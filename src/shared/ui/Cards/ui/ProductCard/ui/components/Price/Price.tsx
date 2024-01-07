import { FC } from 'react'
import clsx from 'clsx'
import s from './Price.module.scss'

interface IPriceProps {
    className?: string
    price: number
}

export const Price: FC<IPriceProps> = (props) => {
    const { price, className } = props

    return (
        <div className={clsx(s.Price, className)}>
            <span className={s.price}>${price}</span>
        </div>
    )
}
