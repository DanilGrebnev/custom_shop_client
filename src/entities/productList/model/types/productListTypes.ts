import { IProduct, IProductFilterList } from '@/app/types/product'

export interface IProductListSchema {
    totalCount: number
    products: IProduct[]
    filters: IProductFilterList[]
    loading: boolean
    error: any
}
