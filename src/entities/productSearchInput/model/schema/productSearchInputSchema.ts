import { IProduct } from '@/app/types/product'

export interface IProductSearchInputSchema {
    totalСount: number
    products: IProduct[]
    input: string
    isOpenSearchList: boolean
    loading: boolean
    error: any
    hiddenSearchList: boolean
}
