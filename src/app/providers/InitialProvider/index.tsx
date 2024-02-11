'use client'

import { ILayout } from '@/app/types/layout'
import { useGetSettingsQuery } from '@/entities/settings'
import { useGetCartQuery } from '@/features/basket'
import { useGetProfileQuery } from '@/features/userProfile'
import { memo } from 'react'

export const InitialProvider = memo(({ children }: ILayout) => {
    // Получение профиля и изначальная авторизация
    useGetProfileQuery()
    // Получение товаров корзины
    useGetCartQuery()
    // Получение настроек магазина
    useGetSettingsQuery()

    return children
})

InitialProvider.displayName = 'InitialProvider'
