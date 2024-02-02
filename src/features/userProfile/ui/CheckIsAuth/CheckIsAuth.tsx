'use client'

import { useAppDispatch } from '@/shared/hooks'
import { useEffect } from 'react'
import { UserProfileServices } from '../..'

const CheckIsAuth = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserProfileServices.fetchIsAuth())
    }, [dispatch])
    return <></>
}

export default CheckIsAuth
