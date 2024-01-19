'use client'
import { UserProfileServices } from '@/features/userProfile'
import { useEffect } from 'react'
import { useAppDispatch } from '@/shared/hooks'

export const ProfilePage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserProfileServices.fetchUserProfile())
    }, [dispatch])

    return <h1>Profile</h1>
}
