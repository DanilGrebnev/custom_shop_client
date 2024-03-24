'use client'

import { ComponentPropsWithRef } from 'react'

import s from './CheckBox.module.scss'

import clsx from 'clsx'

interface CheckBox extends ComponentPropsWithRef<'input'> {
    label?: string
}

export const CheckBox = (props: CheckBox) => {
    const { className, ...otherProps } = props

    return (
        <div className={clsx(s.checkbox, className)}>
            <input {...otherProps} />
        </div>
    )
}
