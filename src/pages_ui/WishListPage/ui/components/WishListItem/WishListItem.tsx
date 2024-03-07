'use client'

import { type FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Papper } from '@/shared/ui/Papper'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { IUserProfileFavorites } from '@/app/types/profile'

import s from './s.module.scss'

import { LikeButtonWidget } from '@/widget/LikeButton'
import clsx from 'clsx'

interface IWishListItemProps {
    className?: string
    favoriteProduct?: IUserProfileFavorites
}

export const WishListItem: FC<IWishListItemProps> = (props) => {
    const { className, favoriteProduct } = props

    return (
        <Papper>
            <div className={clsx(s['wish-list-item'], className)}>
                {favoriteProduct && (
                    <div className={s['img-wrapper']}>
                        <Image
                            className={s.img}
                            fill={true}
                            src={favoriteProduct.image}
                            alt={`icon ${favoriteProduct.name}`}
                        />
                    </div>
                )}
                <div className={s['wishlist-content']}>
                    <Link
                        className={s.link}
                        href={NavigationRoutes.product(
                            favoriteProduct?.id as number
                        )}>
                        <h3>{favoriteProduct?.name}</h3>
                        <p>{favoriteProduct?.description}</p>
                    </Link>

                    <div>
                        <LikeButtonWidget
                            productId={favoriteProduct?.id ?? 0}
                        />
                    </div>
                </div>
            </div>
        </Papper>
    )
}

WishListItem.displayName = 'WishListItem'
