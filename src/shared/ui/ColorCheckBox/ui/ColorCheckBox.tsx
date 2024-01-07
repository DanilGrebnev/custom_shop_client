'use client'

import { FC, ChangeEvent, memo } from 'react'
import CheckMarkIcon from '/public/static/icons/check-mark.svg'
import s from './ColorCheckBox.module.scss'

interface IColorCheckBoxProps {
    color?: string
    name: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

export const ColorCheckBox: FC<IColorCheckBoxProps> = memo((props) => {
    const { onChange, color, value, name } = props

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
    }

    return (
        <label
            className={s.ColorCheckBox}
            style={{ background: color }}>
            <input
                value={value}
                name={name}
                type="checkbox"
                onChange={onInputChange}
            />
            <div className={s.circle}></div>

            <div className={s.icon}>
                <CheckMarkIcon fill="white" />
            </div>
        </label>
    )
})

ColorCheckBox.displayName = 'ColorCheckBox'
