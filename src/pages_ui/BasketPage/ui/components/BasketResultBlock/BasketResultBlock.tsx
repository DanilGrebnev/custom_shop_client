'use client'

import { useGetSettingsQuery } from '@/entities/settings'

import { Button } from '@/shared/ui/Button'
import { Papper } from '@/shared/ui/Papper'

import s from './BasketResultBlock.module.scss'

export const BasketResultBlock = () => {
    const { data } = useGetSettingsQuery()

    return (
        <Papper className={s.total}>
            <p className={s['total-title']}>В корзине</p>
            <div className={s['product-count']}>2 товара</div>
            <div className={s.price}>10 800 {data?.currency}</div>
            <Button
                hover={true}
                className={s.btn}>
                Перейти к оформлению
            </Button>
        </Papper>
    )
}
