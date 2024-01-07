import { StaticImageData } from 'next/image'

export interface IProductCard {
    productId: number | string
    name: string
    images: { image: string | StaticImageData }[]
    rating: number
    price: number
    description?: string
    type?: 'cell' | 'list'
}
