'use client'

import { ILayout } from '@/app/types/layout'
import { useGetSettingsQuery } from '../model/api/settingApi'

const FetchingSettingComponent = ({ children }: ILayout) => {
    const { data } = useGetSettingsQuery()

    const root = document.documentElement
    root.style.setProperty('--global-palette1', data?.color || null)

    return children
}

export default FetchingSettingComponent
