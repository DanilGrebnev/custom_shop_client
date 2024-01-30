'use client'

import { ILayout } from '@/app/types/layout'
import { UserProfileServices } from '@/features/userProfile'
import { useAppDispatch } from '@/shared/hooks'
import { useEffect } from 'react'

export const InitialProvider = ({ children }: ILayout) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserProfileServices.fetchUserProfile())
    }, [dispatch])

    return children
}
