'use client'

import { FC, MouseEvent, ReactNode, forwardRef, memo, useState } from 'react'

import Arrow from '@/shared/assets/arrow.svg'

import { TCheckBoxArguments } from '../CheckBoxTypes'
import s from './s.module.scss'

import { Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'

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

export const CheckBox: FC<ICheckBoxProps> = memo(
    forwardRef((props, ref) => {
        const { className, label, disabled, children, onChange, ...other } =
            props
        const [isOpen, setIsOpen] = useState(false)

        const onOpen = (e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
        }

        const isOpenClass = isOpen ? s.active : ''

        const title = typeof label !== 'string' ? '' : label

        return (
            <div className={clsx(s.CheckBox, isOpenClass, className)}>
                <div
                    title={title}
                    className={clsx(s.content, isOpenClass)}>
                    <CustomCheckbox
                        {...other}
                        ref={ref}
                        disabled={disabled}
                        onChange={onChange}
                    />
                    {label && (
                        <div
                            onClick={onOpen}
                            className={clsx(s.label, {
                                [s.disabled]: disabled,
                            })}>
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
)

CheckBox.displayName = 'CheckBox'
