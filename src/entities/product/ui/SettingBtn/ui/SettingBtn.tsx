'use client'

import { productActions } from '@/entities/product'

import SettingIcon from '@/shared/assets/setting.svg'
import { useAppDispatch } from '@/shared/hooks'

import s from './SettingBtn.module.scss'

export const SettingBtn = () => {
    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(productActions.toggleOpenFilter(true))
    }

    return (
        <SettingIcon
            onClick={openModal}
            className={s.icon}
        />
    )
}
