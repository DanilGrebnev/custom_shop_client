'use client'

import {
    FC,
    MouseEvent,
    ReactNode,
    forwardRef,
    memo,
    useEffect,
    useState,
} from 'react'

import Arrow from '@/shared/assets/arrow.svg'

import { TCheckBoxArguments } from '../CheckBoxTypes'
import s from './s.module.scss'

import { Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'

type ICheckBoxProps = TCheckBoxArguments & {
    label?: ReactNode
    id?: string | number
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
        const { className, label, id, disabled, children, onChange, ...other } =
            props

        const [isOpen, setIsOpen] = useState(false)

        const onOpen = (e: MouseEvent<any>) => {
            if (!children) return
            e.stopPropagation()
            setIsOpen(!isOpen)
        }

        // useEffect(() => {
        //     console.log(isOpen)
        // }, [isOpen])

        const isOpenClass = clsx({ [s.active]: isOpen })

        const labelClass = clsx(s.label, {
            [s.disabled]: disabled,
            [s.active]: label,
            [s.children]: children,
            [s.open]: isOpen,
        })

        const arrowClass = clsx(s.icon, { [s.active]: children })

        const childrenWrapperClass = clsx(s['children-wrapper'], isOpenClass, {
            [s.active]: children,
        })

        const title = clsx({ [label as string]: typeof label === 'string' })

        return (
            <div
                title={title as string}
                className={clsx(s.CheckBox, isOpenClass, className)}>
                <div className={clsx(s.content, isOpenClass)}>
                    <CustomCheckbox
                        {...other}
                        ref={ref}
                        disabled={disabled}
                        onChange={onChange}
                    />
                    <div
                        onClick={onOpen}
                        className={labelClass}>
                        {label}
                    </div>
                    <Arrow
                        onClick={onOpen}
                        className={arrowClass}
                    />
                </div>

                <div className={childrenWrapperClass}>{children}</div>
            </div>
        )
    })
)

CheckBox.displayName = 'CheckBox'
