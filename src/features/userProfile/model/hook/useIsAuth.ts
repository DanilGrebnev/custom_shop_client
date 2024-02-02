'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { UserProfileSelectors } from '../selectors/userProfileSelectors'
import { UserProfileServices } from '../services/userProfileServices'

export const useIsAuth = () => {
    const dispatch = useAppDispatch()
    const isAuthLoading = useAppSelector(UserProfileSelectors.getIsAuthLoading)
    const isAuth = useAppSelector(UserProfileSelectors.getIsAuth)

    useEffect(() => {
        dispatch(UserProfileServices.fetchIsAuth())
    }, [dispatch])

    return { isAuthLoading, isAuth }
}
