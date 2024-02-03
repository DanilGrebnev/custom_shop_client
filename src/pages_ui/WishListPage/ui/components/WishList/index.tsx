'use client'

import { UserProfileSelectors, useFetchProfile } from '@/features/userProfile'
import { useAppSelector } from '@/shared/hooks'

import { v4 } from 'uuid'
import { WishListItem } from '../WishListItem/WishListItem'

export const WishList = () => {
    const wishList = useAppSelector(UserProfileSelectors.getWishList)

    return (
        <>
            {wishList.map((product) => {
                return (
                    <WishListItem
                        key={v4()}
                        product={product}
                    />
                )
            })}
        </>
    )
}
