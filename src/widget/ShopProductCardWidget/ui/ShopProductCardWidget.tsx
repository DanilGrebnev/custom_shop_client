'use client'

import { ReactNode, memo, useEffect, useState } from 'react'

import Link from 'next/link'

import { useAddProductInBasketByIdMutation } from '@/features/basket'
import {
    useGetProfileQuery,
    useToggleWishListMutation,
} from '@/features/userProfile'

import { useGetSettingsQuery } from '@/entities/settings'

import { ImagePreview } from '@/shared/ui/ImagePreview'
import { Rating } from '@/shared/ui/Rating'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { IImage } from '@/app/types/product'

import s from './ShopProductCardWidget.module.scss'

import { BuyButton } from '@/widget/BuyButton'
import { LikeButtonWidget } from '@/widget/LikeButton'
import clsx from 'clsx'

interface Props {
    type: 'cell' | 'list'
    productId: number
    rating: number
    images: IImage[]
    name: string
    price: number
    description: string
    isActiveLikeButton?: boolean
    quantity: number
}

export const ShopProductCardWidget = memo((props: Props) => {
    const {
        description,
        images,
        name,
        price,
        productId,
        rating,
        quantity,
        type,
    } = props

    const { currency } = useGetSettingsQuery(undefined, {
        selectFromResult: (result) => ({
            currency: result.data?.currency,
        }),
    })

    return (
        <div className={clsx(s.card, s[type])}>
            <ImagePreview
                name={name}
                images={images}
                className={s.preview}
            />
            <Link
                className={s.title}
                href={NavigationRoutes.product(productId)}>
                {name}
            </Link>
            <Link
                className={s.description}
                href={NavigationRoutes.product(productId)}>
                {description}
            </Link>
            <Rating
                className={s.rating}
                rating={rating}
            />
            <p className={s.price}>
                {price} {currency}
            </p>
            <p className={s.quantity}>{quantity} в наличии</p>
            <div className={s['btn-group']}>
                <LikeButtonWidget productId={productId} />
                <BuyButton
                    quantity={quantity}
                    productId={productId}
                />
            </div>
        </div>
    )
})

ShopProductCardWidget.displayName = 'ShopProductCardWidget'
