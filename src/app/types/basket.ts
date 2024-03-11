export interface ICartItem {
    cartItemId: number
    quantity: number
    product: {
        productId: number
        image: string
        quantity: number
        name: string
    }
}

export interface ICart {
    totalAmount: number
    totalPrice: number
    cartId: number
    cartItem: ICartItem[]
}

export type IDeleteProductFromBasket = number

export interface IProductInBasket {
    productId: number
    quantity: number
}

/**
 * Интерфейс изменения количества товара в корзине
 */
export interface IItemAmountInBasket {
    quantity: number
    id: number
}
