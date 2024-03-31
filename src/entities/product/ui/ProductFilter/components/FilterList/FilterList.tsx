import { memo } from 'react'

import { ProductSelectors } from '@/entities/product'

import { useAppSelector } from '@/shared/hooks'
import { DropDown } from '@/shared/ui/DropDown'

import { isCheckedFilter } from '@/app/types/product'

import s from '../../ProductFilter.module.scss'
import { CustomCheckBoxFilter } from '../CustomCheckBoxFilter/CustomCheckBoxFilter'
import { RatingLabel } from '../RatingLabel/RatingLabel'

import clsx from 'clsx'

interface SelectLabelArgs {
    slug: string
    value: string
    label: string
}

export const FilterList = () => {
    const filters = useAppSelector(ProductSelectors.getAllFilters)

    return (
        <>
            {filters?.map((filter) => {
                if (isCheckedFilter(filter)) {
                    const { slug } = filter
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
                                            key={id}
                                            slug={slug}
                                            id={id}
                                            className={s['choice-wrapper']}
                                            label={label}
                                            name={slug}
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
        </>
    )
}
