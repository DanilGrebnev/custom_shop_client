// interface ICartProduct {
//     id: number
//     name: string
//     quantity: number
//     images: { image: string }[]
// }

// export interface ICartItem {
//     id: number
//     quantity: number
//     product: ICartProduct
// }

// export interface ICartResponse {
//     id: number
//     user: number
//     cart_item: ICartItem[]
// }

export interface ICart {
    id: number
    price: number
    quantity: number
    cart: string
    product: number
}
