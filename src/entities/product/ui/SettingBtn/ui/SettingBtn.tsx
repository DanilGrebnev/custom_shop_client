'use client'

import { productActions } from '@/entities/product'

import SettingIcon from '@/shared/assets/setting.svg'
import { useAppDispatch } from '@/shared/hooks'

import s from './SettingBtn.module.scss'

import clsx from 'clsx'

interface IProps {
    className?: string
}

export const SettingBtn = ({ className }: IProps) => {
    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(productActions.toggleOpenSetting(true))
    }

    return (
        <SettingIcon
            title="Открыть настройки"
            onClick={openModal}
            className={clsx(s.icon, className)}
        />
    )
}
