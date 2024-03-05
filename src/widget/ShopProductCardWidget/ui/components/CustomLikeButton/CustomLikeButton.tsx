import { useEffect, useState } from 'react'

import {
    useGetProfileQuery,
    useToggleWishListMutation,
} from '@/features/userProfile'

import { LikeButton } from '@/shared/ui/Buttons'
import { Dialog } from '@/shared/ui/Modal'

interface IProps {
    productId: number
}

export const CustomLikeButton = (props: IProps) => {
    const { productId } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { wishList } = useGetProfileQuery(undefined, {
        selectFromResult: (result) => ({
            wishList: result?.data?.favorites,
        }),
    })

    const [toggleWishList, result] = useToggleWishListMutation()

    const isLike = Boolean(wishList?.find((el) => el.id === productId))

    const onToggleWishList = () => {
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
                disabled={result.isLoading}
                onClick={onToggleWishList}
                active={isLike}
            />
            {isOpen && (
                <Dialog
                    closeTimer={3000}
                    onClose={() => setIsOpen(false)}>
                    Добавлено в избранное
                </Dialog>
            )}
        </>
    )
}
