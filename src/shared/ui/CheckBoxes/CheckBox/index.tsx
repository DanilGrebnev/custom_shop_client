'use client'

import { FC, memo, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Checkbox } from '@mui/material'

import clsx from 'clsx'
import s from './s.module.scss'

type ICheckBoxProps = Parameters<typeof Checkbox>[0] & {
    label?: ReactNode
    children?: ReactNode
}

const CustomCheckbox = styled(Checkbox)(() => ({
    color: 'var(--global-palette1)',
    '&.Mui-checked': {
        color: 'var(--global-palette1)',
    },
}))

export const CheckBox: FC<ICheckBoxProps> = memo((props) => {
    const { className, label, disabled, children, onChange, ...other } = props

    return (
        <div className={clsx(s.CheckBox, className)}>
            <CustomCheckbox
                disabled={disabled}
                onChange={onChange}
                {...other}
            />
            {label && (
                <div className={clsx(s.label, { [s.disabled]: disabled })}>
                    {label}
                </div>
            )}
        </div>
    )
})

CheckBox.displayName = 'CheckBox'
