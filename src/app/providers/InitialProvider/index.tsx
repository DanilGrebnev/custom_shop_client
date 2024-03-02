'use client'

import { memo } from 'react'

import { useGetCartQuery } from '@/features/basket'
import { useGetProfileQuery } from '@/features/userProfile'

import { useGetProductFiltersQuery } from '@/entities/productList'
import { useGetSettingsQuery } from '@/entities/settings'

import { ILayout } from '@/app/types/layout'

export const InitialProvider = memo(({ children }: ILayout) => {
    // Получение профиля и изначальная авторизация
    useGetProfileQuery()
    // Получение товаров корзины
    useGetCartQuery()
    // Получение настроек магазина
    useGetSettingsQuery()
    
    // Получение фильтров продуктов
    useGetProductFiltersQuery()
    return children
})

InitialProvider.displayName = 'InitialProvider'
