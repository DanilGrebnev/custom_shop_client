'use client'

import { useGetCartQuery } from '@/features/basket'

import { useGetSettingsQuery } from '@/entities/settings'

import { Button } from '@/shared/ui/Button'
import { Papper } from '@/shared/ui/Papper'

import s from './BasketResultBlock.module.scss'

export const BasketResultBlock = () => {
    const { data: settingData } = useGetSettingsQuery()
    const { data: basketData } = useGetCartQuery()

    return (
        <Papper className={s.total}>
            <p className={s['total-title']}>Условия заказа</p>
            <div className={s['product-amount']}>
                <p>Количество товаров:</p>
                <p className={s['product-amount-value']}>
                    {basketData?.totalAmount}
                </p>
            </div>

            <div className={s['total-price']}>
                <p>На сумму:</p>
                <p className={s['total-price-value']}>
                    {basketData?.totalPrice} {settingData?.currency}
                </p>
            </div>
            <Button
                hover={true}
                className={s.btn}>
                Перейти к оформлению
            </Button>
        </Papper>
    )
}
