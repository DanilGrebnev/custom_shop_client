'use client'

import { FC, useMemo } from 'react'
import { LikeButton } from '@/shared/ui/Buttons'
import {
    useToggleWishListMutation,
    useGetProfileQuery,
} from '@/features/userProfile'

interface LikeButtonWidgetProps {
    productId: string
}

export const LikeButtonWidget: FC<LikeButtonWidgetProps> = ({ productId }) => {
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
            active={isActive}
            loading={isLoading}
            onClick={() => toggleWishList(+productId)}
        />
    )
}
