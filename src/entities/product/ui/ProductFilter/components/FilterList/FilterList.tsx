import { ChangeEvent, useRef } from 'react'

import { CheckBox } from '@/shared/ui/CheckBox'
import { DropDown } from '@/shared/ui/DropDown'

import { IProductFilterResponse } from '@/app/types/product'

import s from './FilterList.module.scss'

import clsx from 'clsx'

interface Props {
    data?: IProductFilterResponse
    className?: string
}

export const FilterList = (props: Props) => {
    const { data, className } = props

    const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {}

    return (
        <>
            {data?.map((filter) => {
                return (
                    <DropDown
                        key={filter.id}
                        title={filter.name}
                        label={filter.name}>
                        <div className={clsx(s['filter-list'])}>
                            {filter.choices.map(({ label, value }) => {
                                return (
                                    <CheckBox
                                        className={s['choice-wrapper']}
                                        key={label}
                                        label={label}
                                        name={label}
                                        value={value}
                                        title={label}
                                        onChange={onChange}
                                    />
                                )
                            })}
                        </div>
                    </DropDown>
                )
            })}
        </>
    )
}
