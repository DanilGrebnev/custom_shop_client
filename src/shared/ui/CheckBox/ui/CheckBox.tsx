'use client'

import {
    ChangeEvent,
    ComponentPropsWithRef,
    ReactNode,
    forwardRef,
    memo,
    useEffect,
    useState,
} from 'react'

import CheckMarkIcon from '@/shared/assets/check-mark-2.svg'

import s from './CheckBox.module.scss'
import { Label } from './Label'

import clsx from 'clsx'

interface CheckBox extends Omit<ComponentPropsWithRef<'input'>, 'onChange'> {
    label?: ReactNode
    onChange?: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export const CheckBox = memo(
    forwardRef<HTMLInputElement, CheckBox>((props, ref) => {
        const { className, checked, title, label, onChange, ...other } = props

        const [isChecked, setChecked] = useState<boolean>(checked || false)

        const onCheckedChange = (e: ChangeEvent<HTMLInputElement>) => {
            e.stopPropagation()
            setChecked(!isChecked)
            onChange?.(e, isChecked)
        }

        useEffect(() => {
            setChecked(checked || false)
        }, [checked])

        return (
            <label
                title={title}
                tabIndex={0}
                className={clsx(s.checkbox, className)}>
                <div className={clsx(s.square, { [s.checked]: isChecked })}>
                    <input
                        {...other}
                        ref={ref}
                        className={s.input}
                        type="checkbox"
                        checked={isChecked}
                        onChange={onCheckedChange}
                    />
                    <CheckMarkIcon
                        className={clsx(s.icon, { [s.checked]: isChecked })}
                    />
                </div>
                {label && <Label className={s.label}>{label}</Label>}
            </label>
        )
    })
)

CheckBox.displayName = 'CheckBox'
