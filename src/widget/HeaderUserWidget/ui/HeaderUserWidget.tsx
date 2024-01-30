import {
    UserProfileBasketCounter,
    UserProfileWishListCounter,
} from '@/features/userProfile'
import UserProfileIcon from '@/shared/assets/profile_icon_160.webp'

import s from './HeaderUserWidget.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

export const HeaderUserWidget = () => {
    return (
        <div className={s['header-section-user']}>
            <UserProfileBasketCounter />
            <UserProfileWishListCounter />

            <Link
                className={s.icon}
                href={NavigationRoutes.profileMe()}>
                <Image
                    width={40}
                    height={40}
                    alt="profile"
                    placeholder="blur"
                    src={UserProfileIcon}
                />
            </Link>
        </div>
    )
}
