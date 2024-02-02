'use client'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { UserProfileServices } from '../services/userProfileServices'
import { UserProfileSelectors } from '../selectors/userProfileSelectors'
import { useCallback } from 'react'

export const useFetchProfile = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(UserProfileSelectors.getIsLoading)
    const profile = useAppSelector(UserProfileSelectors.getData)

    const fetchProfile = useCallback(() => {
        dispatch(UserProfileServices.fetchUserProfile())
    }, [dispatch])

    return { isLoading, profile, fetchProfile }
}
