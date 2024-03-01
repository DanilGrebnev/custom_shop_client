'use client'

import { memo, useCallback } from 'react'

import Link from 'next/link'

import {
    useGetProfileQuery,
    useToggleWishListMutation,
} from '@/features/userProfile'

import { useGetSettingsQuery } from '@/entities/settings'

import { Button } from '@/shared/ui/Button'
import { LikeButton } from '@/shared/ui/Buttons'
import { ImagePreview } from '@/shared/ui/ImagePreview'
import { Rating } from '@/shared/ui/Rating'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { IImage } from '@/app/types/product'

import s from './ShopProductCardWidget.module.scss'

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
}

export const ShopProductCardWidget = memo((props: Props) => {
    const { description, images, name, price, productId, rating, type } = props

    const { currency } = useGetSettingsQuery(undefined, {
        selectFromResult: (result) => ({
            currency: result.data?.currency,
        }),
    })

    const { wishList } = useGetProfileQuery(undefined, {
        selectFromResult: (result) => ({
            wishList: result?.data?.favorites,
        }),
    })

    const [toggleWishList] = useToggleWishListMutation()

    const isLike = useCallback(() => {
        return Boolean(wishList?.find((el) => el.id === productId))
    }, [wishList, productId])

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
            <div className={s['btn-group']}>
                <LikeButton
                    onClick={() => toggleWishList(productId)}
                    active={isLike()}
                />
                <Button hover={true}>Купить</Button>
            </div>
        </div>
    )
})

ShopProductCardWidget.displayName = 'ShopProductCardWidget'
