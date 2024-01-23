'use client'

import { UserProfileCounterItem } from '../UserProfileCounterItem'
import { UserProfileSelectors } from '../../model/selectors/userProfileSelectors'
import WishListIcon from '/public/static/icons/wishlist.svg'
import { useAppSelector } from '@/shared/hooks'

export const UserProfileWishListCounter = () => {
    const wishList = useAppSelector(UserProfileSelectors.getWishList)

    return (
        <UserProfileCounterItem
            icon={<WishListIcon />}
            count={wishList.length}
        />
    )
}
