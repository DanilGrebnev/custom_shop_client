'use client'

import {
    UserProfileBasketCounter,
    UserProfileServices,
    UserProfileWishListCounter,
    useFetchProfile,
    useIsAuth,
} from '@/features/userProfile'
import UserProfileIcon from '@/shared/assets/profile_icon_160.webp'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './HeaderUserWidget.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, memo } from 'react'

export const HeaderUserWidget = memo(() => {
    const { isAuth, isAuthLoading } = useIsAuth()
    const { fetchProfile } = useFetchProfile()

    useEffect(() => {
        if (!isAuth && isAuthLoading) return
        fetchProfile()
    }, [isAuthLoading, fetchProfile, isAuth])

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
})
HeaderUserWidget.displayName = 'HeaderUserWidget'
