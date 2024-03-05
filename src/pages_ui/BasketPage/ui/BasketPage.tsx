import { type FC } from 'react'

import { Button } from '@/shared/ui/Button'
import { Papper } from '@/shared/ui/Papper'

import s from './BasketPage.module.scss'
import { BasketHeader } from './components/BasketHeader/BasketHeader'
import { BasketResultBlock } from './components/BasketResultBlock/BasketResultBlock'

import { ProductWidget } from '@/widget/ProductWidget'
import clsx from 'clsx'

export const BasketPage: FC = () => {
    return (
        <div className={clsx(s.BasketPage, 'contain')}>
            <h1 className={s.title}>Корзина</h1>
            <div className={s.wrapper}>
                <BasketHeader className={s.header} />
                <div className={s.list}>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <ProductWidget key={i} />
                        ))}
                </div>
                <BasketResultBlock />
            </div>
        </div>
    )
}

BasketPage.displayName = 'BasketPage'
