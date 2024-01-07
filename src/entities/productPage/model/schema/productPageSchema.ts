import { IProduct } from '@/app/types/Product'

export interface IProductPageSchema {
    product: IProduct
    loading: boolean
    error: any
}
