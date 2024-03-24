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

export interface ProductChoiceFilter {
    categoryId: string
    id: string
    choices: Choice[]
    name: string
    slug: string
    type: FilterType
}

type Choice = { label: string; value: string }
type FilterType = 'choice' | 'multiple_choices'

export type IProductFilterResponse = ProductChoiceFilter[]
