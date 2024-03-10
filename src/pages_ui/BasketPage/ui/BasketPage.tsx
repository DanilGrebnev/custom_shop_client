'use client'

import { useGetCartQuery } from '@/features/basket'

import s from './BasketPage.module.scss'
import { BasketHeader } from './components/BasketHeader/BasketHeader'
import { BasketResultBlock } from './components/BasketResultBlock/BasketResultBlock'

import { ProductWidget } from '@/widget/ProductWidget'
import clsx from 'clsx'
import { v4 } from 'uuid'

export const BasketPage = () => {
    const { data } = useGetCartQuery()

    return (
        <div className={clsx(s.BasketPage, 'contain')}>
            <h1 className={s.title}>Корзина</h1>
            <div className={s.wrapper}>
                <BasketHeader className={s.header} />
                <div className={s.list}>
                    {data?.cartItem.map((cartItem) => {
                        return (
                            <ProductWidget
                                key={v4()}
                                cartItem={cartItem}
                            />
                        )
                    })}
                </div>
                <BasketResultBlock />
            </div>
        </div>
    )
}

BasketPage.displayName = 'BasketPage'
