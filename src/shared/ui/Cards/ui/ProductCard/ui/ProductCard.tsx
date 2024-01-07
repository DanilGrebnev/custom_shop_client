'use client'

import { FC } from 'react'
import { ProductListPreviewType } from '@/app/types/Product'
import { CardPreview, CardButton, Price, SideMenu, Name } from './components'
import { Rating } from '@/shared/ui/Rating'
import { IProductCard } from '../model/types/type'
import { Description } from './components/Description/Description'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import Link from 'next/link'
import clsx from 'clsx'
import s from './ProductCard.module.scss'

export const ProductCard: FC<IProductCard> = (props) => {
    const {
        images,
        name,
        price,
        rating,
        description,
        productId,
        type = ProductListPreviewType.CELL,
    } = props

    const hrefToProduct = NavigationRoutes.product(productId + '')

    if (type === ProductListPreviewType.CELL) {
        return (
            <div className={clsx(s['product-card'], s.cell)}>
                <Link href={hrefToProduct}>
                    <div className={s['content-wrapper']}>
                        <CardPreview
                            alt={name}
                            images={images}
                        />

                        <Name name={name} />

                        <Rating rating={rating} />

                        <Price price={price} />
                    </div>
                </Link>

                <SideMenu className={s.menu} />
                <CardButton className={s.button} />
            </div>
        )
    }

    if (type === ProductListPreviewType.LIST) {
        return (
            <div className={clsx(s['product-card'], s.list)}>
                <div className={s['left-col']}>
                    <Link href={hrefToProduct}>
                        <CardPreview
                            alt={name}
                            images={images}
                            className={s['card-preview']}
                        />
                    </Link>
                    <SideMenu className={s.menu} />
                </div>

                <div className={s['right-col']}>
                    <Link href={hrefToProduct}>
                        <Name name={name} />
                    </Link>
                    <Rating rating={rating} />

                    <Price price={price} />
                    {description && (
                        <Description
                            className={s.description}
                            text={description}
                        />
                    )}
                    <CardButton className={s.button} />
                </div>
            </div>
        )
    }
}
