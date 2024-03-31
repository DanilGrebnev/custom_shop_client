import { ChangeEvent } from 'react'

import { ProductSelectors } from '@/entities/product'

import { useAppSelector } from '@/shared/hooks'
import { DropDown } from '@/shared/ui/DropDown'

import { isCheckedFilter } from '@/app/types/product'

import s from '../../ProductFilter.module.scss'
import { CustomCheckBoxFilter } from '../CustomCheckBoxFilter/CustomCheckBoxFilter'
import { RatingFilter } from '../RatingFilter/RatingFilter'

import clsx from 'clsx'
import { v4 } from 'uuid'

export const FilterList = () => {
    const filters = useAppSelector(ProductSelectors.getAllFilters)
    // console.log(filters)
    return (
        <>
            {filters?.map((filter) => {
                if (isCheckedFilter(filter)) {
                    return (
                        <DropDown
                            key={filter.id}
                            title={'Открыть фильтр ' + filter.name}
                            label={filter.name}>
                            <div className={clsx(s['filter-list'])}>
                                {filter?.choices?.map((choice) => {
                                    const { label, value, checked, id } = choice

                                    return (
                                        <CustomCheckBoxFilter
                                            id={id}
                                            className={s['choice-wrapper']}
                                            key={v4()}
                                            label={label}
                                            name={filter.slug}
                                            checked={checked}
                                            value={value}
                                            title={label}
                                        />
                                    )
                                })}
                            </div>
                        </DropDown>
                    )
                }
            })}
            <RatingFilter />
        </>
    )
}
