'use client'

import {
    ChangeEvent,
    Component,
    ComponentPropsWithRef,
    type FC,
    useRef,
} from 'react'

import { isNumber } from '@/shared/lib/isNumber'

import { IProductRangeFilter } from '@/app/types/product'

import { CustomInput } from '../../CustomInput'
import s from './RangeFilter.module.scss'

import clsx from 'clsx'

type Event = ChangeEvent<HTMLInputElement>
type TOnChange = (e: Event, value: string) => void

interface IRangeFilterProps {
    className?: string
    name1?: string
    name2?: string
    filter: IProductRangeFilter
    value1?: string
    value2?: string
    onChange1: TOnChange
    onChange2: TOnChange
}

/**
 * Компонент фильтра диапазона
 */
export const RangeFilter: FC<IRangeFilterProps> = (props) => {
    const {
        className,
        filter,
        onChange1,
        onChange2,
        value1,
        value2,
        name1,
        name2,
    } = props

    const ref1 = useRef<HTMLInputElement>(null)
    const ref2 = useRef<HTMLInputElement>(null)

    const onChangeValue1 = (e: Event) => {
        const { value } = e.target
        if (!isNumber(value)) return
        onChange1(e, value)
    }

    const onChangeValue2 = (e: Event) => {
        const { value } = e.target
        if (!isNumber(value)) return
        onChange2(e, value)
    }

    return (
        <div className={clsx(s.RangeFilter, className)}>
            <CustomInput
                ref={ref1}
                size="small"
                name={name1}
                value={value1 ?? ref1.current?.value}
                onChange={onChangeValue1}
                autoComplete="off"
                label={`от ${filter.min_value}`}
                variant="outlined"
            />
            <CustomInput
                ref={ref2}
                name={name2}
                value={value2 ?? ref2.current?.value}
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
