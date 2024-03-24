'use client'

import { memo } from 'react'

import { useGetCartQuery } from '@/features/basket'
import { useGetProfileQuery } from '@/features/userProfile'

import { useGetSettingsQuery } from '@/entities/settings'

import { ILayout } from '@/app/types/layout'

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
