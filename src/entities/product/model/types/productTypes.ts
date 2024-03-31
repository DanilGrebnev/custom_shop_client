import { IProductFilterResponse } from '@/app/types/product'

export interface IProductFilter extends IProductFilterResponse {}

export interface IProductSchema {
    filters: IProductFilter
    openFilter: boolean
    usp: string
}

export interface ToggleChecekd {
    id?: string
    name: string
    value: string
    checked: boolean
}
