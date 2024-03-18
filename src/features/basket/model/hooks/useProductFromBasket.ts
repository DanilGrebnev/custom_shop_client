import { useMemo } from 'react'

import { useGetCartQuery } from '../api/basketApi'

interface Props {
    productId: string | number
}

export const useProductFromBasket = ({ productId }: Props) => {
    const { data: cart } = useGetCartQuery()

    const currentProductInBasket = useMemo(() => {
        return cart?.cartItem.find((cartItem) => {
            return String(cartItem.product.productId) === String(productId)
        })
    }, [cart, productId])

    return currentProductInBasket
}
