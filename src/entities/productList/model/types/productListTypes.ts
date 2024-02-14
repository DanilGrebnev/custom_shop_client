import { IProduct, IProductFilterList } from '@/app/types/Product'

export interface IProductListSchema {
    totalCount: number
    products: IProduct[]
    filters: IProductFilterList[]
    loading: boolean
    error: any
}
