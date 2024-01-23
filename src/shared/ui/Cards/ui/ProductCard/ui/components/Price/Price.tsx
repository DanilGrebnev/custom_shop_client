'use client'

import { FC } from 'react'
import { useAppSelector } from '@/shared/hooks'
import { SettingSelectors } from '@/entities/settings'
import clsx from 'clsx'
import s from './Price.module.scss'

interface IPriceProps {
    className?: string
    price: number
}

export const Price: FC<IPriceProps> = (props) => {
    const { price, className } = props
    const currency = useAppSelector(SettingSelectors.getCurrency)
    return (
        <div className={clsx(s.Price, className)}>
            <span className={s.price}>
                {currency} {price}
            </span>
        </div>
    )
}
