'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, memo } from 'react'

import Link from 'next/link'

import {
    UserProfileSelectors,
    UserProfileWishListCounter,
} from '@/features/userProfile'

import { useAppSelector } from '@/shared/hooks'

import s from './HeaderUserWidget.module.scss'
import { Profile } from './Profile/Profile'
import { UserProfileBasket } from './UserProfileBasket/UserProfileBasket'

interface IHeaderUserWidget extends ComponentPropsWithoutRef<'div'> {}

export const HeaderUserWidget = memo((props: IHeaderUserWidget) => {
    const { className, ...otherProps } = props
    const isAuth = useAppSelector(UserProfileSelectors.getIsAuth)

    if (!isAuth) {
        return (
            <div {...props}>
                <Link href={NavigationRoutes.login()}>
                    Войти или зарегестрироваться
                </Link>
            </div>
        )
    }

    return (
        <div
            className={clsx(s['header-section-user'], className)}
            {...otherProps}>
            <UserProfileBasket />
            <UserProfileWishListCounter />
            <Profile />
        </div>
    )
})

HeaderUserWidget.displayName = 'HeaderUserWidget'
