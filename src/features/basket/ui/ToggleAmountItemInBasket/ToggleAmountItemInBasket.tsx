import { useEffect, useState } from 'react'

import { AmountAdded } from '@/shared/ui/AmountAdded'

import {
    useGetCartQuery,
    useToggleItemAmountInBasketMutation,
} from '../../model/api/basketApi'

interface IProps {
    cartItemId: number
    currentItemAmount: number
    itemAmountInBasket: number
}

export const ToggleAmountItemInBasket = (props: IProps) => {
    const { cartItemId, currentItemAmount, itemAmountInBasket } = props

    const { isFetching } = useGetCartQuery()

    const [toggleItemAmount, { isLoading }] =
        useToggleItemAmountInBasketMutation()

    const loading = isFetching || isLoading
    
    const disabled1 = currentItemAmount === itemAmountInBasket
    const disabled2 = itemAmountInBasket === 1

    const increment = () => {
        toggleItemAmount({
            id: cartItemId,
            quantity: itemAmountInBasket + 1,
        })
    }

    const decrement = () => {
        toggleItemAmount({
            id: cartItemId,
            quantity: itemAmountInBasket - 1,
        })
    }

    return (
        <AmountAdded
            disabled1={loading || disabled1}
            disabled2={loading || disabled2}
            value={itemAmountInBasket}
            increment={increment}
            decrement={decrement}
        />
    )
}
