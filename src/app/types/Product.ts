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

/** Типы для фильтров, приходящих с сервера */
export interface ProductFilter {
    categoryId: string
    id: string
    name: string
    slug: string
    type: FilterType
}

// Choice фильтр
export interface ChoiceFilter extends ProductFilter {
    choices: Choice[]
}

export type Choice = {
    label: string
    value: string
    id: string
    checked?: boolean
    slug: string
}

// Range фильтр
export interface RangeFilter extends ProductFilter {
    range: { [key: string]: string }
}

export type FilterType = 'choice' | 'multiple_choices' | 'range'

export type ProductFilterResponse = (RangeFilter | ChoiceFilter)[]

export const isChoiceFilter = (
    filter: ProductFilter
): filter is ChoiceFilter => {
    return filter?.type === 'choice' || filter?.type === 'multiple_choices'
}

export const isRangeFilter = (filter: ProductFilter): filter is RangeFilter => {
    return filter.type === 'range'
}
