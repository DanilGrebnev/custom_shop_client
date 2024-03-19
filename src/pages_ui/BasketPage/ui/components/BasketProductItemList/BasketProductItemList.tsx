'use client'

import { useGetCartQuery } from '@/features/basket'

import s from './BasketProductItemList.module.scss'

import { BasketProductItem } from '@/widget/BasketProductItem'

export const BasketProductItemList = () => {
    const { data } = useGetCartQuery()

    return (
        <div className={s.list}>
            {data?.cartItem.map((cartItem) => {
                return (
                    <BasketProductItem
                        key={cartItem.cartItemId}
                        cartItem={cartItem}
                    />
                )
            })}
        </div>
    )
}
