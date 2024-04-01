import { ProductFilterResponse } from '@/app/types/product'

export interface ProductFilter extends ProductFilterResponse {}

export interface ProductSchema {
    filters: ProductFilter
    openFilter: boolean
    usp: string
}

export interface ToggleChecekd {
    id?: string
    slug: string
}
