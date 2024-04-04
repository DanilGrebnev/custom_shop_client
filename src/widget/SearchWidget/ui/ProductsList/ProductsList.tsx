import { ComponentPropsWithoutRef, memo } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Rating } from '@/shared/ui/Rating'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { type IProduct } from '@/app/types/product'

import s from './ProductList.module.scss'

import clsx from 'clsx'

interface Props extends ComponentPropsWithoutRef<'div'> {
    products?: IProduct[]
}

export const ProductsList = memo((props: Props) => {
    const { className, products, ...other } = props

    return (
        <div
            {...other}
            className={clsx(s['list-wrapper'], className)}>
            <div className={s.list}>
                {products?.map((product) => {
                    return (
                        <Link
                            key={product.id}
                            href={NavigationRoutes.product(product.id)}
                            className={s['list-item-wrapper']}>
                            <div className={s['list-item']}>
                                <div className={s['img-wrapper']}>
                                    <Image
                                        className={s.img}
                                        alt={product.name}
                                        fill={true}
                                        src={product.images[0].image}
                                    />
                                </div>
                                <div className={s['list-item-content']}>
                                    <h2 className={s['product-title']}>
                                        {product.name}
                                    </h2>
                                    <Rating
                                        rating={product.averageRating || 3}
                                    />
                                    <p className={s.price}>
                                        {product.price} р.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
})

ProductsList.displayName = 'ProductsList'
