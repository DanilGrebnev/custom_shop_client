'use client'

import { memo, useEffect, useState } from 'react'

import Link from 'next/link'

import { useAddProductInBasketByIdMutation } from '@/features/basket'
import {
    useGetProfileQuery,
    useToggleWishListMutation,
} from '@/features/userProfile'

import { useGetSettingsQuery } from '@/entities/settings'

import { Button } from '@/shared/ui/Button'
import { ImagePreview } from '@/shared/ui/ImagePreview'
import { Dialog } from '@/shared/ui/Modal'
import { Rating } from '@/shared/ui/Rating'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { IImage } from '@/app/types/product'

import s from './ShopProductCardWidget.module.scss'

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
}

export const ShopProductCardWidget = memo((props: Props) => {
    const { description, images, name, price, productId, rating, type } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [addProductInBasket] = useAddProductInBasketByIdMutation()

    const { currency } = useGetSettingsQuery(undefined, {
        selectFromResult: (result) => ({
            currency: result.data?.currency,
        }),
    })

    const addToBasket = (productId: number) => {
        addProductInBasket({ productId, quantity: 1 })
            .unwrap()
            .then(setIsOpen.bind(null, true))
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
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
                    <LikeButtonWidget productId={productId} />
                    <Button
                        onClick={addToBasket.bind(null, productId)}
                        hover={true}>
                        В корзину
                    </Button>
                </div>
            </div>
            <Dialog
                isopen={isOpen}
                closeTimer={3000}
                onClose={setIsOpen.bind(null, false)}>
                Товар добавлен в корзину
            </Dialog>
        </>
    )
})

ShopProductCardWidget.displayName = 'ShopProductCardWidget'
