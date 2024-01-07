import { IProduct } from '@/app/types/Product'

export interface IProductListSchema {
    totalCount: number
    products: IProduct[]
    loading: boolean
    error: any
}
