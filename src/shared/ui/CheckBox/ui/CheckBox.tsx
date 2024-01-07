'use client'

import { FC, ChangeEvent, memo, ReactNode } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

import clsx from 'clsx'
import s from './CheckBox.module.scss'

interface ICheckBoxProps {
    className?: string
    label: ReactNode
    name: string
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox: FC<ICheckBoxProps> = memo((props) => {
    const { className, name, value, label, onChange } = props

    return (
        <FormControlLabel
            className={clsx(s.CheckBox, className)}
            value={value}
            control={
                <Checkbox
                    size="small"
                    name={name}
                    value={value}
                    color="success"
                    onChange={onChange}
                />
            }
            label={label}
            labelPlacement="end"
        />
    )
})

CheckBox.displayName = 'CheckBox'
