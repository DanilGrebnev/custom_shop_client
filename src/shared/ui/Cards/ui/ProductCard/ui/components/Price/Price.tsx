'use client'

import { FC } from 'react'
import { useGetSettingsQuery } from '@/entities/settings'

import clsx from 'clsx'
import s from './Price.module.scss'

interface IPriceProps {
    className?: string
    price: number
}

export const Price: FC<IPriceProps> = (props) => {
    const { price, className } = props
    const { data } = useGetSettingsQuery()

    return (
        <div className={clsx(s.Price, className)}>
            <span className={s.price}>
                {data?.currency} {price}
            </span>
        </div>
    )
}
