'use client'

import { ILayout } from '@/app/types/layout'
import { useAppDispatch } from '@/shared/hooks'
import { useEffect } from 'react'
import { fetchSetting } from '..'

export const FetchingSettingComponent = ({ children }: ILayout) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSetting())
    }, [dispatch])

    return <>{children}</>
}
