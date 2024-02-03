import { type FC } from 'react'
import { Papper } from '@/shared/ui/Papper'
import { BasketHeader } from './components/BasketHeader/BasketHeader'
import { ProductWidget } from '@/widget/ProductWidget'

import clsx from 'clsx'
import s from './BasketPage.module.scss'

export const BasketPage: FC = () => {
    return (
        <div className={clsx(s.BasketPage, 'contain')}>
            <h1>Корзина</h1>
            <BasketHeader />
            <ProductWidget />
        </div>
    )
}

BasketPage.displayName = 'BasketPage'
