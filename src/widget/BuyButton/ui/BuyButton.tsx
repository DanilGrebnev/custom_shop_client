'use client'

import { ReactNode, useState } from 'react'

import { useAddProductInBasketByIdMutation } from '@/features/basket'
import { ToggleAmountItemInBasket } from '@/features/basket'
import { useProductFromBasket } from '@/features/basket'

import { Button } from '@/shared/ui/Button'
import { Dialog } from '@/shared/ui/Modal'

interface BuyButton {
    productId: number | string
    children?: ReactNode
    disabled?: boolean
    quantity?: number
}

export const BuyButton = (props: BuyButton) => {
    const { productId, children, disabled, quantity: productQuantity } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [addProductInBasket] = useAddProductInBasketByIdMutation()

    const currentProductInBasket = useProductFromBasket({ productId })

    const addToBasket = () => {
        addProductInBasket({ productId, quantity: 1 })
            .unwrap()
            .then(setIsOpen.bind(null, true))
            .catch((err) => {
                console.log(err)
            })
    }

    const disabledBtn = disabled ?? productQuantity === 0

    return (
        <>
            {!currentProductInBasket ? (
                <Button
                    onClick={addToBasket}
                    disabled={disabledBtn}
                    hover={true}>
                    {productQuantity === 0
                        ? 'Товара нет в наличии'
                        : 'В корзину'}
                </Button>
            ) : (
                <ToggleAmountItemInBasket
                    cartItemId={currentProductInBasket.cartItemId}
                    itemAmountInBasket={currentProductInBasket.quantity}
                    currentItemAmount={currentProductInBasket.product.quantity}
                />
            )}
            <Dialog
                isopen={isOpen}
                closeTimer={3000}
                onClose={setIsOpen.bind(null, false)}>
                Товар добавлен в корзину
            </Dialog>
        </>
    )
}
