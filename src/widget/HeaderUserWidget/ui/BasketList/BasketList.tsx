'use client'

import { useGetCartQuery } from '@/features/basket'
import { BasketDropDownItem } from '@/features/userProfile'

import { v4 } from 'uuid'

export const BasketList = () => {
    const { data: basketData } = useGetCartQuery()

    return (
        <>
            {basketData?.cartItem.map((cartItem) => {
                return (
                    <BasketDropDownItem
                        key={v4()}
                        cartItem={cartItem}
                    />
                )
            })}
        </>
    )
}
