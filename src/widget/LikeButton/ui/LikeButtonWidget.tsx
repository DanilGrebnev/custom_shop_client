'use client'

import { FC } from 'react'
import { LikeButton } from '@/shared/ui/Buttons'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import {
    UserProfileServices,
    UserProfileSelectors,
} from '@/features/userProfile'

interface LikeButtonWidgetProps {
    productId: string
}

export const LikeButtonWidget: FC<LikeButtonWidgetProps> = ({ productId }) => {
    const dispatch = useAppDispatch()
    const wishList = useAppSelector(UserProfileSelectors.getWishList)
    const isLoading = useAppSelector(UserProfileSelectors.getIsLoadingWishList)

    const isActive = wishList.some((item) => item.id === +productId)

    const addToWishList = () => {
        dispatch(UserProfileServices.toggleWishList(productId))
    }

    return (
        <LikeButton
            active={isActive}
            loading={isLoading}
            onClick={addToWishList}
        />
    )
}
