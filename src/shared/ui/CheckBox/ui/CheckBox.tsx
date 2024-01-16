'use client'

import { FC, ChangeEvent, memo, ReactNode } from 'react'
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

    return (
        <div className={clsx(s.CheckBox, className)}>
            <Checkbox
                size="small"
                name={name}
                value={value}
                color="success"
                onChange={onChange}
            />
            <div>{label}</div>
        </div>
    )
})

CheckBox.displayName = 'CheckBox'
