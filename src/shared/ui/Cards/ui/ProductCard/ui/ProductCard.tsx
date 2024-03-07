'use client'

import { FC } from 'react'

import Link from 'next/link'

import { ImagePreview } from '@/shared/ui/ImagePreview'
import { Rating } from '@/shared/ui/Rating'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { useToggleTheme } from '@/app/providers/ThemeProvider'

import { IProductCard } from '../model/types/type'
import s from './ProductCard.module.scss'
import { Name, Price } from './components'

import clsx from 'clsx'

export const ProductCard: FC<IProductCard> = (props) => {
    const { images, name, price, rating, productId } = props

    const { theme } = useToggleTheme()

    const url = NavigationRoutes.product(productId as number)

    return (
        <div className={s['product-card']}>
            <Link href={url}>
                <div className={clsx(s['content-wrapper'], s[theme])}>
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
