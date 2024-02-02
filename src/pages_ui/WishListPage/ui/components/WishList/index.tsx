'use client'

import { UserProfileSelectors, useFetchProfile } from '@/features/userProfile'
import { useAppSelector } from '@/shared/hooks'

import { v4 } from 'uuid'
import { WishListItem } from '../WishListItem/WishListItem'
import { useEffect } from 'react'

export const WishList = () => {
    const wishList = useAppSelector(UserProfileSelectors.getWishList)
    const isAuth = useAppSelector(UserProfileSelectors.getIsAuth)
    const { fetchProfile } = useFetchProfile()

    useEffect(() => {
        if (!isAuth) return
        fetchProfile()
    }, [isAuth, fetchProfile])

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
