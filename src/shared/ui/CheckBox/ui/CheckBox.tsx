'use client'

import { FC, ChangeEvent, memo, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Checkbox } from '@mui/material'

import clsx from 'clsx'
import s from './CheckBox.module.scss'

interface ICheckBoxProps {
    className?: string
    label?: ReactNode
    name: string
    value?: string
    chilren?: ReactNode
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox: FC<ICheckBoxProps> = memo((props) => {
    const { className, name, value, label, chilren, onChange } = props

    const CustomCheckbox = styled(Checkbox)(() => ({
        color: 'var(--global-palette1)',
        '&.Mui-checked': {
            color: 'var(--global-palette1)',
        },
    }))

    return (
        <div className={clsx(s.CheckBox, className)}>
            <CustomCheckbox
                size="small"
                name={name}
                value={value}
                onChange={onChange}
            />
            <div>{label}</div>
        </div>
    )
})

CheckBox.displayName = 'CheckBox'
