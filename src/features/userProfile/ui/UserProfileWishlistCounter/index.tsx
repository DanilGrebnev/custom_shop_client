'use client'

import { UserProfileCounterItem } from '../UserProfileCounterItem'
import WishListIcon from '/public/static/icons/wishlist.svg'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { useGetProfileQuery } from '../../model/api/profileApi'

export const UserProfileWishListCounter = () => {
    const { data } = useGetProfileQuery()

    return (
        <UserProfileCounterItem
            icon={<WishListIcon />}
            count={data?.favorites.length}
            href={NavigationRoutes.wishlist()}
        />
    )
}
