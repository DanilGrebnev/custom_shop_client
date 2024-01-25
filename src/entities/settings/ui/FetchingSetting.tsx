'use client'
/* eslint-disable react-hooks/exhaustive-deps */

import { ILayout } from '@/app/types/layout'
import { useAppDispatch } from '@/shared/hooks'
import { useEffect } from 'react'
import { fetchSetting } from '../model/services/fetchSetting'
import { SettingSelectors } from '../model/selectors/settingsSelector'
import { useAppSelector } from '@/shared/hooks'

const FetchingSettingComponent = ({ children }: ILayout) => {
    const dispatch = useAppDispatch()
    const setting = useAppSelector(SettingSelectors.getSetting)

    useEffect(() => {
        dispatch(fetchSetting())
    }, [])

    const root = document.documentElement
    root.style.setProperty('--global-palette1', setting.color)

    return children
}

export default FetchingSettingComponent
