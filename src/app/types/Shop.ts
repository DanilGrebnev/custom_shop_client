import { IProduct } from './Product'

export interface IShopResponse {
    total_count: number
    products: IProduct[]
}
