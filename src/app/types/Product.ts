import { StaticImageData } from 'next/image'

import { ICategory } from '@/app/types/category'

export interface IImage {
    image: string | StaticImageData
}

export interface IProduct {
    id: number
    createdAt: string
    updatedAt: string
    name: string
    slug: string
    description: string
    price: number
    quantity: number
    isPublished: boolean
    available: boolean
    category: ICategory[]
    color: string
    images: IImage[]
    averageRating: number
    numberOfRatings: number
}
export interface IProductData {
    totalCount: number
    products: IProduct[]
}

export enum ProductListPreviewType {
    CELL = 'cell',
    LIST = 'list',
}

// Типы фильтров продуктов
interface BaseFilterInfo {
    code: string
    label: string
    type: 'choices' | 'multiple_choices' | 'number'
}

export interface IProductChoiceFilter {
    code: string
    label: string
    value: string
    children: IProductChoiceFilter[] | []
}

export interface IProductCheckBoxFilter extends BaseFilterInfo {
    choices: IProductChoiceFilter[]
    value: string
}

export interface IProductRangeFilter extends BaseFilterInfo {
    max_value: string
    measure: string
    min_value: string
}

export interface IProductFilterResponse {
    filters: Array<IProductCheckBoxFilter | IProductRangeFilter>
}

// Type guards function
export const isChoiceFilter = (
    filter: IProductCheckBoxFilter | IProductRangeFilter
): filter is IProductCheckBoxFilter => {
    return 'choices' in filter
}

export const isRangeFilter = (
    filter: IProductCheckBoxFilter | IProductRangeFilter
): filter is IProductRangeFilter => {
    return 'measure' in filter
}
