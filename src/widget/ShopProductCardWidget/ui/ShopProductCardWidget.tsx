'use client'

import { ImagePreview } from '@/shared/ui/ImagePreview/ImagePreview'
import { IImage } from '@/app/types/Product'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { LikeButton } from '@/shared/ui/Buttons'
import { Button } from '@/shared/ui/Button'
import { Rating } from '@/shared/ui/Rating'
import { useGetSettingsQuery } from '@/entities/settings'
import { useCallback, memo } from 'react'
import {
    useGetProfileQuery,
    useToggleWishListMutation,
} from '@/features/userProfile'

import Link from 'next/link'
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
            <div className={s.main}>
                <Link href={NavigationRoutes.product(productId)}>
                    <h3 className={s.title}>{name}</h3>
                </Link>
                <Link
                    className={s.description}
                    href={NavigationRoutes.product(productId)}>
                    <p className={s.description}>{description}</p>
                </Link>

                <footer className={s.footer}>
                    <Rating rating={rating} />
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
                </footer>
            </div>
        </div>
    )
})

ShopProductCardWidget.displayName = 'ShopProductCardWidget'
