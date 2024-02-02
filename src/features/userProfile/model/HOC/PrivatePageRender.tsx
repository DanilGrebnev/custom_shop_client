'use client'

import { ILayout } from '@/app/types/layout'
import { useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { UserProfileSelectors, UserProfileServices } from '../..'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { useRouter } from 'next/navigation'
import { PageLoader } from '@/shared/ui/LoadersSpinners'

/*
Компонент высшего порядка, который в зависимости от того,
авторизован пользователь или нет, пропускает на приватные роуты
*/
const PrivateRouteRender = ({ children }: ILayout) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const isLoading = useAppSelector(UserProfileSelectors.getIsAuthLoading)

    useLayoutEffect(() => {
        dispatch(UserProfileServices.fetchIsAuth())
            .unwrap()
            .catch(() => router.push(NavigationRoutes.login()))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return <h1>Проверка аутентификации</h1>
    }

    return children
}

export default PrivateRouteRender
