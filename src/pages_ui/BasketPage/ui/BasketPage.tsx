import { type FC } from 'react'

import { Papper } from '@/shared/ui/Papper'

import s from './BasketPage.module.scss'
import { BasketHeader } from './components/BasketHeader/BasketHeader'

import { ProductWidget } from '@/widget/ProductWidget'
import clsx from 'clsx'

export const BasketPage: FC = () => {
    return (
        <div className={clsx(s.BasketPage, 'contain')}>
            <h1>Корзина</h1>
            <div className={s.wrapper}>
                <BasketHeader className={s.header} />
                <div className={s.list}>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <ProductWidget key={i} />
                        ))}
                </div>
                <Papper className={s.total}>Условия заказа</Papper>
            </div>
        </div>
    )
}

BasketPage.displayName = 'BasketPage'
