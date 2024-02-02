'use client'

import { ILayout } from '@/app/types/layout'
import { useEffect, useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { UserProfileSelectors, UserProfileServices, useIsAuth } from '../..'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { useRouter } from 'next/navigation'
import { PageLoader } from '@/shared/ui/LoadersSpinners'

/*
Компонент высшего порядка, который в зависимости от того,
авторизован пользователь или нет, пропускает на приватные роуты
*/
const PrivateRouteRender = ({ children }: ILayout) => {
    const router = useRouter()
    const { isAuth, isAuthLoading } = useIsAuth()

    useEffect(() => {
        if (!isAuth && !isAuthLoading) {
            router.push('/login')
        }
    }, [isAuth, isAuthLoading, router])

    if (isAuthLoading) {
        return <PageLoader />
    }

    return children
}

export default PrivateRouteRender
