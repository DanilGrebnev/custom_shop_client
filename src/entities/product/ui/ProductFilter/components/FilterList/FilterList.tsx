import { ChangeEvent } from 'react'

import { ProductSelectors } from '@/entities/product'

import { useAppSelector } from '@/shared/hooks'
import { CheckBox } from '@/shared/ui/CheckBox'
import { DropDown } from '@/shared/ui/DropDown'

import { isCheckedFilter } from '@/app/types/product'

import { CustomCheckedFilter } from '../CustomCheckedFilter/CustomCheckedFilter'
import s from './FilterList.module.scss'

import clsx from 'clsx'
import { v4 } from 'uuid'

export const FilterList = () => {
    const filters = useAppSelector(ProductSelectors.getAllFilters)
    console.log(filters)
    const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {}

    return (
        <>
            {filters?.map((filter) => {
                if (isCheckedFilter(filter)) {
                    return (
                        <DropDown
                            key={filter.id}
                            title={filter.name}
                            label={filter.name}>
                            <div className={clsx(s['filter-list'])}>
                                {filter?.choices?.map((choice) => {
                                    const { label, value, checked } = choice

                                    return (
                                        <CustomCheckedFilter
                                            className={s['choice-wrapper']}
                                            key={v4()}
                                            label={label}
                                            name={label}
                                            checked={checked}
                                            value={value}
                                            title={label}
                                            onChange={onChange}
                                        />
                                    )
                                })}
                            </div>
                        </DropDown>
                    )
                }
            })}
        </>
    )
}
