'use client'

import { FC } from 'react'
import { Price, Name } from './components'
import { Rating } from '@/shared/ui/Rating'
import { IProductCard } from '../model/types/type'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { ImagePreview } from '@/shared/ui/ImagePreview'

import Link from 'next/link'
import s from './ProductCard.module.scss'

export const ProductCard: FC<IProductCard> = (props) => {
    const { images, name, price, rating, productId } = props

    const url = NavigationRoutes.product(productId as number)

    return (
        <div className={s['product-card']}>
            <Link href={url}>
                <div className={s['content-wrapper']}>
                    <ImagePreview
                        name={name}
                        images={images}
                    />

                    <Name name={name} />

                    <Rating rating={rating} />

                    <Price price={price} />
                </div>
            </Link>
        </div>
    )
}
