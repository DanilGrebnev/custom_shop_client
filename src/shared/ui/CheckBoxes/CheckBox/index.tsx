'use client'

import { FC, memo, MouseEvent, ReactNode, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Checkbox } from '@mui/material'
import { TCheckBoxArguments } from '../CheckBoxTypes'
import Arrow from '@/shared/assets/arrow.svg'

import clsx from 'clsx'
import s from './s.module.scss'

type ICheckBoxProps = TCheckBoxArguments & {
    label?: string
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
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    const isOpenClass = isOpen ? s.active : ''

    return (
        <div className={clsx(s.CheckBox, isOpenClass, className)}>
            <div
                title={label}
                className={clsx(s.content, isOpenClass)}>
                <CustomCheckbox
                    disabled={disabled}
                    onChange={onChange}
                    {...other}
                />
                {label && (
                    <div
                        onClick={onOpen}
                        className={clsx(s.label, { [s.disabled]: disabled })}>
                        {label}
                    </div>
                )}
                {children && (
                    <Arrow
                        onClick={onOpen}
                        className={s.icon}
                    />
                )}
            </div>

            {children && (
                <div className={clsx(s['children-wrapper'], isOpenClass)}>
                    {children}
                </div>
            )}
        </div>
    )
})

CheckBox.displayName = 'CheckBox'
