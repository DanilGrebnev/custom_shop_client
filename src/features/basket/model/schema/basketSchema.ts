export interface IBasketItem {
    id: number
    quantity: number
    product: number
}

interface IBasketItems {
    id: string
    user: number
    total_price: number
    cart_item: IBasketItem[]
}

export interface IBasketSchema {
    basket: IBasketItems | null
    loading: boolean
    error: any
}
