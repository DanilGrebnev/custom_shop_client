'use client'

import s from './BasketPage.module.scss'
import { BasketHeader } from './components/BasketHeader/BasketHeader'
import { BasketProductItemList } from './components/BasketProductItemList/BasketProductItemList'
import { BasketResultBlock } from './components/BasketResultBlock/BasketResultBlock'

import clsx from 'clsx'

export const BasketPage = () => {
    return (
        <div className={clsx(s.BasketPage, 'contain')}>
            <h1 className={s.title}>Корзина</h1>
            <div className={s.wrapper}>
                <BasketHeader />
                <BasketProductItemList />
                <BasketResultBlock />
            </div>
        </div>
    )
}

BasketPage.displayName = 'BasketPage'
