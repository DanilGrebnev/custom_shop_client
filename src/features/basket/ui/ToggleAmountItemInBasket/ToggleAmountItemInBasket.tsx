'use client'

import { useEffect, useState } from 'react'
import { memo } from 'react'

import { AmountAdded } from '@/shared/ui/AmountAdded'
import { Dialog } from '@/shared/ui/Modal'

import {
    useGetCartQuery,
    useToggleItemAmountInBasketMutation,
} from '../../model/api/basketApi'

interface Props {
    cartItemId?: number
    currentItemAmount?: number
    itemAmountInBasket?: number
}

export const ToggleAmountItemInBasket = memo((props: Props) => {
    const { cartItemId = 0, currentItemAmount, itemAmountInBasket = 0 } = props

    /** Состояние нужно для оптимистичного увеличения или уменьшения счетчика
     * кол-ва товара, не дожидаясь ответа от сервера */
    const [amount, setAmount] = useState<number>(itemAmountInBasket)
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
    const { isFetching: isFetchingCart } = useGetCartQuery()
    const [
        toggleItemAmount,
        { isLoading: isLoadingToggleItemAmount, isError },
    ] = useToggleItemAmountInBasketMutation()

    const loading = isLoadingToggleItemAmount || isFetchingCart
    const disabled1 = currentItemAmount === itemAmountInBasket
    const disabled2 = itemAmountInBasket === 1

    const increment = () => {
        // Оптимистично обновляем количество товара
        setAmount((p) => p + 1)
        toggleItemAmount({
            id: cartItemId,
            quantity: itemAmountInBasket + 1,
        })
            .unwrap()
            // Возврат состояния назад
            .catch(() => setAmount((p) => p - 1))
    }

    const decrement = () => {
        setAmount((p) => p - 1)
        toggleItemAmount({
            id: cartItemId,
            quantity: itemAmountInBasket - 1,
        })
            .unwrap()
            .catch(() => setAmount((p) => p + 1))
    }

    useEffect(() => {
        setAmount(itemAmountInBasket)
    }, [itemAmountInBasket])

    useEffect(() => {
        isError && setIsOpenDialog(true)
    }, [isError])

    return (
        <>
            <AmountAdded
                disabled1={disabled1}
                disabled2={disabled2}
                value={amount}
                disabled={loading}
                increment={increment}
                decrement={decrement}
            />
            <Dialog
                isopen={isOpenDialog}
                onClose={() => setIsOpenDialog(false)}
                closeTimer={3000}>
                Ошибка изменения кол-ва товара
            </Dialog>
        </>
    )
})

ToggleAmountItemInBasket.displayName = 'ToggleAmountItemInBasket'
