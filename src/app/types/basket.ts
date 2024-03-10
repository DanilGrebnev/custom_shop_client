export interface ICartItem {
    cartItemId: number
    quantity: number
    product: {
        productId: number
        image: string
        quantity: string
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
