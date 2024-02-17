'use client'

import { useGetProfileQuery } from '@/features/userProfile'

import { v4 } from 'uuid'
import { WishListItem } from '../WishListItem/WishListItem'

export const WishList = () => {
    const { data } = useGetProfileQuery()
    console.log(data?.favorites)
    return (
        <>
            {data?.favorites.map((favorite) => {
                return (
                    <WishListItem
                        key={v4()}
                        favoriteProduct={favorite}
                    />
                )
            })}
        </>
    )
}
