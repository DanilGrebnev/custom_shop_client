'use client'

import { ChangeEvent, type FC } from 'react'

import { useSessionStorage } from '@/shared/hooks'
import { isNumber } from '@/shared/lib/isNumber'

import { IProductRangeFilter } from '@/app/types/product'

import { CustomInput } from '../../CustomInput'
import s from './RangeFilter.module.scss'

import clsx from 'clsx'

type Event = ChangeEvent<HTMLInputElement>

interface IRangeFilterProps {
    className?: string
    filter: IProductRangeFilter
    onChange?: (e: Event) => void
}

/**
 * Компонент фильтра диапазона
 */
export const RangeFilter: FC<IRangeFilterProps> = (props) => {
    const { className, filter, onChange } = props

    const key1 = filter.code + '_min'
    const key2 = filter.code + '_max'

    const [input1, setInput1] = useSessionStorage({
        key: key1,
        defaultValue: '',
    })

    const [input2, setInput2] = useSessionStorage({
        key: key2,
        defaultValue: '',
    })

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
            <CustomInput
                size="small"
                name={key1}
                value={input1}
                onChange={onChangeValue1}
                label={`от ${filter.min_value}`}
                variant="outlined"
            />
            <CustomInput
                name={key2}
                value={input2}
                onChange={onChangeValue2}
                size="small"
                label={`до ${filter.max_value}`}
                variant="outlined"
            />
        </div>
    )
}

RangeFilter.displayName = 'RangeFilter'
