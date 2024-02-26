import { IProduct, IProductFilterList } from '@/app/types/product'

export interface IProductListSchema {
    totalCount: number
    filters: { id: string; checked: boolean }[]
    loading: boolean
    error: any
}
