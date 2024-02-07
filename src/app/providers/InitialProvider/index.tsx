'use client'

import { ILayout } from '@/app/types/layout'
import { useGetCartQuery } from '@/features/basket'
import { useGetProfileQuery } from '@/features/userProfile'

export const InitialProvider = ({ children }: ILayout) => {
    useGetProfileQuery()
    useGetCartQuery()
    
    return children
}
