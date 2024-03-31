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
export interface ProductChoiceFilter {
    categoryId: string
    id: string
    choices: Choice[]
    name: string
    slug: string
    type: FilterType
}
export type Choice = {
    label: string
    value: string
    id?: string
    checked?: boolean
    slug: string
}
export type FilterType = 'choice' | 'multiple_choices'

export type IProductFilterResponse = ProductChoiceFilter[]

export const isCheckedFilter = (
    filter: ProductChoiceFilter
): filter is ProductChoiceFilter => {
    return filter.type === 'choice' || filter.type === 'multiple_choices'
}
