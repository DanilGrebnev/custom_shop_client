'use client'

import { type FC } from 'react'
import { IUserProfileFavorites } from '@/features/userProfile'
import { Papper } from '@/shared/ui/Papper'
import { LikeButtonWidget } from '@/widget/LikeButton'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import Link from 'next/link'

import clsx from 'clsx'
import s from './s.module.scss'
import Image from 'next/image'

interface IWishListItemProps {
    className?: string
    favoriteProduct?: IUserProfileFavorites
}

export const WishListItem: FC<IWishListItemProps> = (props) => {
    const { className, favoriteProduct } = props

    return (
        <Papper>
            <div className={clsx(s.WishListItem, className)}>
                {favoriteProduct && (
                    <Image
                        src={favoriteProduct.image}
                        width={200}
                        height={200}
                        alt={`icon ${favoriteProduct.name}`}
                    />
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
                            productId={String(favoriteProduct?.id)}
                        />
                    </div>
                </div>
            </div>
        </Papper>
    )
}

WishListItem.displayName = 'WishListItem'
