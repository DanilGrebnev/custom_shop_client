'use client'

import { memo } from 'react'
import {
    UserProfileSelectors,
    UserProfileWishListCounter,
} from '@/features/userProfile'
import { useAppSelector } from '@/shared/hooks'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { UserProfileBasket } from './UserProfileBasket/UserProfileBasket'

import UserProfileIcon from '@/shared/assets/profile_icon_160.webp'
import Image from 'next/image'
import Link from 'next/link'

import s from './HeaderUserWidget.module.scss'

export const HeaderUserWidget = memo(() => {
    const isAuth = useAppSelector(UserProfileSelectors.getIsAuth)

    if (!isAuth) {
        return (
            <div>
                <Link href={NavigationRoutes.login()}>
                    Войти или зарегестрироваться
                </Link>
            </div>
        )
    }

    return (
        <div className={s['header-section-user']}>
            <UserProfileBasket />
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
})

HeaderUserWidget.displayName = 'HeaderUserWidget'
