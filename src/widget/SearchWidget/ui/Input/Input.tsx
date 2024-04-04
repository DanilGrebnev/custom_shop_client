'use client'

import { ChangeEvent, type FC, InputHTMLAttributes } from 'react'
import { BeatLoader } from 'react-spinners'

import s from './Input.module.scss'

import clsx from 'clsx'

interface IInputProps {
    isLoading?: boolean
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<IInputProps> = (props) => {
    const { isLoading, ...otherProps } = props

    return (
        <div className={s['input-wrapper']}>
            <input
                {...otherProps}
                className={s.input}
            />
            {isLoading && (
                <BeatLoader
                    className={s.loader}
                    size={8}
                    color="var(--global-palette1)"
                />
            )}
        </div>
    )
}

Input.displayName = 'Input'
