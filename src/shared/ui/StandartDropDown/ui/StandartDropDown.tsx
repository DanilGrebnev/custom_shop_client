'use client'

import { FC, ChangeEvent } from 'react'
import ArrowIcon from '/public/static/icons/arrow.svg'
import clsx from 'clsx'
import s from './StandartDropDown.module.scss'

interface IStandartDropDownProps {
    className?: string
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    title?: string
}

export const StandartDropDown: FC<IStandartDropDownProps> = (props) => {
    const { className, title, onChange } = props

    return (
        <div className={s['select-container']}>
            {title && <h2 className={s.title}>{title}</h2>}

            <div className={s['select-wrapper']}>
                <select
                    onChange={onChange}
                    className={clsx(s.select, className)}>
                    <option value="default">Choose an option</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Orange">Orange</option>
                </select>
                <ArrowIcon className={s.icon} />
            </div>
        </div>
    )
}

StandartDropDown.displayName = 'StandartDropDown'
