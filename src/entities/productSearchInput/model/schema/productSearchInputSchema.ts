import { IProduct } from '@/app/types/Product'

export interface IProductSearchInputSchema {
    totalСount: number
    products: IProduct[]
    input: string
    isOpenSearchList: boolean
    loading: boolean
    error: any
}
