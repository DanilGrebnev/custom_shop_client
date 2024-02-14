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

export enum ProductListPreviewType {
    CELL = 'cell',
    LIST = 'list',
}

type IType = 'multiple_choices' | 'number' | 'choices'

export interface IProductFilterChoicesItem {
    label: string
    value: string
    children: IProductFilterChoicesItem[]
    code?: string
}

export interface IProductFilterList {
    code: string
    label: string
    type: IType
    choices: IProductFilterChoicesItem[]
    measure?: string
    max_: string
    min_: string
}

export interface IProductFilterResponse {
    filters: IProductFilterList[]
}

export interface IProductData {
    totalCount: number
    products: IProduct[]
}
