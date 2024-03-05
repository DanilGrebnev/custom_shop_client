'use client'

import { ComponentPropsWithoutRef, memo } from 'react'

import Link from 'next/link'

import {
    UserProfileSelectors,
    UserProfileWishList,
} from '@/features/userProfile'

import { useAppSelector } from '@/shared/hooks'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './HeaderUserWidget.module.scss'
import { Profile } from './Profile/Profile'
import { UserProfileBasket } from './UserProfileBasket/UserProfileBasket'

import clsx from 'clsx'

interface IHeaderUserWidget extends ComponentPropsWithoutRef<'div'> {}

export const HeaderUserWidget = memo((props: IHeaderUserWidget) => {
    const { className, ...otherProps } = props
    const isAuth = useAppSelector(UserProfileSelectors.getIsAuth)

    if (!isAuth) {
        return (
            <div {...props}>
                <Link href={NavigationRoutes.login}>
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
            <UserProfileWishList />
            <Profile />
        </div>
    )
})

HeaderUserWidget.displayName = 'HeaderUserWidget'
