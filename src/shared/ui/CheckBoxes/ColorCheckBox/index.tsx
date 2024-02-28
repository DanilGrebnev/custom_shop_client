'use client'

import {
    ChangeEvent,
    FC,
    RefObject,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'

import { CheckBox } from '../CheckBox'
import { IColorCheckBox } from '../CheckBoxTypes'
import s from './s.module.scss'
import CheckMarkIcon from '/public/static/icons/check-mark.svg'

import clsx from 'clsx'

export const ColorCheckBox: FC<IColorCheckBox> = memo((props) => {
    const {
        onChange: onChangeFromProps,
        checked,
        id,
        labelcolor,
        value,
        name,
        ...otherProps
    } = props

    const [isChecked, setIsChecked] = useState<boolean | undefined>(checked)

    useEffect(() => {
        setIsChecked(checked)
    }, [checked])

    const onChangeChecked = (e: any, checked: boolean) => {
        setIsChecked(checked)
    }

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>, isChecked: boolean) => {
            onChangeChecked(e, isChecked)
            onChangeFromProps?.(e, isChecked)
        },
        [onChangeFromProps]
    )

    return (
        <label
            className={s.ColorCheckBox}
            style={{ background: labelcolor }}>
            <CheckBox
                {...otherProps}
                id={id}
                className={s.checkbox}
                value={value as string}
                name={name}
                checked={checked || false}
                onChange={onChange}
            />

            <div className={s.circle} />

            <div className={clsx(s.icon, { [s.checked]: isChecked })}>
                <CheckMarkIcon fill="white" />
            </div>
        </label>
    )
})

ColorCheckBox.displayName = 'ColorCheckBox'
