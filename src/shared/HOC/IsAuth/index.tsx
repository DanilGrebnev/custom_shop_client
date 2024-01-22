'use client'

import { ReactNode } from 'react'
import { LoginSelector } from '@/features/login'
import { useAppSelector } from '@/shared/hooks'
import { useRouter } from 'next/navigation'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

interface IIsAuthProps {
    children: ReactNode
}

export const IsAuth = ({ children }: IIsAuthProps) => {
    const isAuth = useAppSelector(LoginSelector.getIsAuth)
    const router = useRouter()

    if (!isAuth) {
        router.push(NavigationRoutes.main())
    }

    return children
}
