'use client'

import { FC, useMemo } from 'react'

import {
    useGetProfileQuery,
    useToggleWishListMutation,
} from '@/features/userProfile'

import { LikeButton } from '@/shared/ui/Buttons'

type TLikeButton = Parameters<typeof LikeButton>[0]

interface LikeButtonWidgetProps
    extends Pick<TLikeButton, 'variant' | 'className'> {
    productId: string
}

export const LikeButtonWidget: FC<LikeButtonWidgetProps> = (props) => {
    const { productId, ...other } = props

    const { data } = useGetProfileQuery()
    const [toggleWishList, { isLoading }] = useToggleWishListMutation()

    const isActive =
        useMemo(
            () =>
                data?.favorites.some((favorite) => favorite.id === +productId),
            [data, productId]
        ) || false

    return (
        <LikeButton
            {...other}
            active={isActive}
            loading={isLoading}
            onClick={toggleWishList.bind(null, +productId)}
        />
    )
}
