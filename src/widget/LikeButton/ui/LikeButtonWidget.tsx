'use client'

import { FC, useState } from 'react'

import {
    useGetProfileQuery,
    useToggleWishListMutation,
} from '@/features/userProfile'

import { LikeButton } from '@/shared/ui/Buttons'
import { Dialog } from '@/shared/ui/Modal'

type TLikeButton = Parameters<typeof LikeButton>[0]

interface LikeButtonWidgetProps
    extends Pick<TLikeButton, 'variant' | 'className'> {
    productId: number
}

export const LikeButtonWidget: FC<LikeButtonWidgetProps> = (props) => {
    const { productId, ...other } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
            {
                <Dialog
                    isOpen={isOpen}
                    closeTimer={3000}
                    onClose={setIsOpen.bind(null, false)}>
                    Добавлено в избранное
                </Dialog>
            }
        </>
    )
}
