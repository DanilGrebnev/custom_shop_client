'use client'

import { ChangeEvent, type FC, useRef } from 'react'

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
    value1?: string
    value2?: string
    onChange1: (key: string, value: string) => void
    onChange2: (key: string, value: string) => void
}

/**
 * Компонент фильтра диапазона
 */
export const RangeFilter: FC<IRangeFilterProps> = (props) => {
    const { className, filter, onChange1, onChange2, value1, value2 } = props

    const ref1 = useRef<HTMLInputElement>(null)
    const ref2 = useRef<HTMLInputElement>(null)

    const key1 = filter.code + '_min'
    const key2 = filter.code + '_max'

    const onChangeValue1 = (e: Event) => {
        const { value } = e.target
        if (!isNumber(value)) return
        onChange1(key1, value)
    }

    const onChangeValue2 = (e: Event) => {
        const { value } = e.target
        if (!isNumber(value)) return
        onChange2(key2, value)
    }

    return (
        <div className={clsx(s.RangeFilter, className)}>
            <CustomInput
                ref={ref1}
                size="small"
                name={key1}
                value={value1 || ref1.current?.value}
                onChange={onChangeValue1}
                autoComplete="off"
                label={`от ${filter.min_value}`}
                variant="outlined"
            />
            <CustomInput
                ref={ref2}
                name={key2}
                value={value2 || ref2.current?.value}
                onChange={onChangeValue2}
                size="small"
                autoComplete="off"
                label={`до ${filter.max_value}`}
                variant="outlined"
            />
        </div>
    )
}

RangeFilter.displayName = 'RangeFilter'
