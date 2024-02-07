'use client'

import { useState, type FC, useEffect } from 'react'
import { IUserProfileFavorites } from '@/features/userProfile'
import { $axios } from '@/app/API'
import { IProduct } from '@/app/types/Product'
import { Papper } from '@/shared/ui/Papper'
import { Sliders } from '../Slider'
import { LikeButtonWidget } from '@/widget/LikeButton'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import Link from 'next/link'

import clsx from 'clsx'
import s from './s.module.scss'

interface IWishListItemProps {
    className?: string
    product?: IUserProfileFavorites
}

export const WishListItem: FC<IWishListItemProps> = (props) => {
    const { className, product } = props
    const [products, setProducts] = useState<IProduct | null>(null)

    const fetchProduct = async (productId: number | undefined) => {
        const response = await $axios.get<IProduct>('product/' + productId)
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProduct(product?.id)
    }, [product])

    return (
        <Papper>
            <div className={clsx(s.WishListItem, className)}>
                {products && <Sliders product={products} />}

                <div className={s['wishlist-content']}>
                    <Link
                        className={s.link}
                        href={NavigationRoutes.product(String(product?.id))}>
                        <h3>{products?.name}</h3>
                        <p>{products?.description}</p>
                    </Link>

                    <div>
                        <LikeButtonWidget productId={String(product?.id)} />
                    </div>
                </div>
            </div>
        </Papper>
    )
}

WishListItem.displayName = 'WishListItem'
