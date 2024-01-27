'use client'

import { FC, memo, ReactNode, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Checkbox } from '@mui/material'
import { TCheckBoxArguments } from '../CheckBoxTypes'

import clsx from 'clsx'
import s from './s.module.scss'

type ICheckBoxProps = TCheckBoxArguments & {
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
    const [chacked, setChecked] = useState<boolean>(false)

    const {
        className,
        label,
        disabled,
        children,
        defChecked,
        onChange,
        ...other
    } = props

    return (
        <div className={clsx(s.CheckBox, className)}>
            <CustomCheckbox
                checked={chacked}
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
