'use client'

import { type FC, useState, ChangeEvent } from 'react'
import { TextField } from '@mui/material'
import { IFilterItem } from '@/app/types/filters'
import { isNumber } from '@/shared/lib/isNumber'

import clsx from 'clsx'
import s from './RangeFilter.module.scss'

type Event = ChangeEvent<HTMLInputElement>

interface IRangeFilterProps {
    className?: string
    filterItem: IFilterItem
    onChange?: (e: Event) => void
}

/**
 * Компонент фильтра диапазона
 */
export const RangeFilter: FC<IRangeFilterProps> = (props) => {
    const { className, filterItem, onChange } = props

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const key1 = filterItem.code + '_min'
    const key2 = filterItem.code + '_max'

    const onChangeValue1 = (e: Event) => {
        const { value } = e.target
        if (!isNumber(value)) return
        setInput1(value.trim())
        onChange?.(e)
    }

    const onChangeValue2 = (e: Event) => {
        const { value } = e.target
        if (!isNumber(value)) return
        setInput2(value.trim())
        onChange?.(e)
    }

    return (
        <div className={clsx(s.RangeFilter, className)}>
            <TextField
                color="success"
                size="small"
                name={key1}
                value={input1}
                onChange={onChangeValue1}
                label={`от ${filterItem.min_value}`}
                variant="outlined"
            />
            <TextField
                color="success"
                name={key2}
                value={input2}
                onChange={onChangeValue2}
                size="small"
                label={`до ${filterItem.max_value}`}
                variant="outlined"
            />
        </div>
    )
}

RangeFilter.displayName = 'RangeFilter'
