'use client'

import { FC, memo, useState } from 'react'

import { CheckBox } from '../CheckBox'
import { IColorCheckBox } from '../CheckBoxTypes'
import s from './s.module.scss'
import CheckMarkIcon from '/public/static/icons/check-mark.svg'

import clsx from 'clsx'

export const ColorCheckBox: FC<IColorCheckBox> = memo((props) => {
    const { onChange, checked, id, labelcolor, value, name } = props

    const [isChecked, setIsCheck] = useState<boolean>(checked || false)

    return (
        <label
            className={s.ColorCheckBox}
            style={{ background: labelcolor }}>
            <CheckBox
                id={id}
                className={s.checkbox}
                value={value as string}
                name={name}
                checked={checked}
                onChange={(e, ch) => {
                    setIsCheck(ch)
                    onChange?.(e, isChecked)
                }}
            />

            <div className={s.circle} />

            <div className={clsx(s.icon, { [s.checked]: isChecked })}>
                <CheckMarkIcon fill="white" />
            </div>
        </label>
    )
})

ColorCheckBox.displayName = 'ColorCheckBox'
