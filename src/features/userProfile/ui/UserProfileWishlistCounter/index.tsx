'use client'

import { UserProfileCounterItem } from '../UserProfileCounterItem'
import { UserProfileSelectors } from '../../model/selectors/userProfileSelectors'
import WishListIcon from '/public/static/icons/wishlist.svg'
import { useAppSelector } from '@/shared/hooks'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

export const UserProfileWishListCounter = () => {
    const wishList = useAppSelector(UserProfileSelectors.getWishList)

    return (
        <UserProfileCounterItem
            icon={<WishListIcon />}
            count={wishList.length}
            href={NavigationRoutes.wishlist()}
        />
    )
}
