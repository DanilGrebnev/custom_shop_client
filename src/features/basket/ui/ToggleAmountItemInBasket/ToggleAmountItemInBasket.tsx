'use client'

import { memo, useEffect, useState } from 'react'

import { AmountAdded } from '@/shared/ui/AmountAdded'
import { Dialog } from '@/shared/ui/Modal'

import {
    useDeleteProductFromBasketByIdMutation,
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

    const [deleteProductFromBasket, { isLoading: isLoadingDeleteFromBasket }] =
        useDeleteProductFromBasketByIdMutation()

    const { isFetching: isFetchingCart } = useGetCartQuery()
    const [
        toggleItemAmount,
        { isLoading: isLoadingToggleItemAmount, isError: isErrorToggleAmount },
    ] = useToggleItemAmountInBasketMutation()

    const loading =
        isLoadingToggleItemAmount || isFetchingCart || isLoadingDeleteFromBasket

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
        if (itemAmountInBasket === 1) {
            deleteProductFromBasket(cartItemId)
            return
        }
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
        isErrorToggleAmount && setIsOpenDialog(true)
    }, [isErrorToggleAmount])

    return (
        <>
            <AmountAdded
                disabled1={currentItemAmount === itemAmountInBasket}
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
