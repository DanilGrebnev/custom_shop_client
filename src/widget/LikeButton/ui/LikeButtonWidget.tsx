'use client'

import React, { FC, memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import {
    useGetProfileQuery,
    useToggleWishListMutation,
} from '@/features/userProfile'

import { LikeButton } from '@/shared/ui/Buttons'
import { Dialog } from '@/shared/ui/Modal'

type TLikeButton = Parameters<typeof LikeButton>[0]

interface IProps extends Pick<TLikeButton, 'variant' | 'className'> {
    productId: number
}

export const LikeButtonWidget: FC<IProps> = memo((props) => {
    const { productId, ...other } = props
    const [isopen, setIsOpen] = useState<boolean>(false)

    const { data } = useGetProfileQuery()
    const [toggleWishList, { isLoading }] = useToggleWishListMutation()

    const isActive = data?.favorites.some(
        (favorite) => favorite.id === +productId
    )

    const onToggleWishList = (productId: number) => {
        toggleWishList(productId)
            .unwrap()
            .then((value) => {
                if ('Success' in value) {
                    setIsOpen(true)
                    return
                }
            })
    }

    return (
        <>
            <LikeButton
                {...other}
                active={isActive ?? false}
                loading={isLoading}
                onClick={onToggleWishList.bind(null, productId)}
            />
            <Dialog
                isopen={isopen}
                closeTimer={3000}
                onClose={() => setIsOpen(false)}>
                Добавлено в избранное
            </Dialog>
        </>
    )
})

LikeButtonWidget.displayName = 'LikeButtonWidget'
