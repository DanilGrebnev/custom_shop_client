'use client'

import { ILayout } from '@/app/types/layout'
import { useGetProfileQuery } from '../api/profileApi'

export const GetInitialProfileProvider = ({ children }: ILayout) => {
    useGetProfileQuery()

    return children
}
