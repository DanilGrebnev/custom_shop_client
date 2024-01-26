'use client'

import { FC, memo, useEffect, useState } from 'react'
import CheckMarkIcon from '/public/static/icons/check-mark.svg'
import { Checkbox } from '@mui/material'
import { IColorCheckBox } from '../CheckBoxTypes'
import clsx from 'clsx'

import s from './s.module.scss'

export const ColorCheckBox: FC<IColorCheckBox> = memo((props) => {
    const { onChange, checked, labelcolor, value, name } = props

    const [isChecked, setIsCheck] = useState<boolean>(checked || false)

    return (
        <label
            className={s.ColorCheckBox}
            style={{ background: labelcolor }}>
            <Checkbox
                className={s.checkbox}
                value={value as string}
                name={name}
                checked={checked}
                onChange={(e, ch) => {
                    setIsCheck(ch)
                    onChange?.(e, isChecked)
                }}
            />

            <div className={s.circle}></div>

            <div className={clsx(s.icon, { [s.checked]: isChecked })}>
                <CheckMarkIcon fill="white" />
            </div>
        </label>
    )
})

ColorCheckBox.displayName = 'ColorCheckBox'
