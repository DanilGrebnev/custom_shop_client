export interface ICartItem {
    cartItemId: number
    quantity: number
    product: {
        productId: number
        image: string
        quantity: number
        name: string
        price: number
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
    productId: number | string
    quantity: number
}

/**
 * Интерфейс изменения количества товара в корзине
 */
export interface ItemAmountInBasket {
    quantity: number
    id: number
}
