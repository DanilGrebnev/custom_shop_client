import { memo } from 'react'

import { ProductSelectors } from '@/entities/product'

import { useAppSelector } from '@/shared/hooks'
import { DropDown } from '@/shared/ui/DropDown'

import { isChoiceFilter, isRangeFilter } from '@/app/types/product'

import s from '../../ProductFilter.module.scss'
import { CustomCheckBoxFilter } from '../CustomCheckBoxFilter/CustomCheckBoxFilter'
import { RangeFilter } from '../RangeFilter'

import clsx from 'clsx'

export const FilterList = memo(() => {
    const filters = useAppSelector(ProductSelectors.getAllFilters)

    return (
        <>
            {filters?.map((filter) => {
                if (isChoiceFilter(filter)) {
                    return (
                        <DropDown
                            key={filter.id}
                            title={'Открыть фильтр ' + filter.name}
                            label={filter.name}>
                            <div className={clsx(s['filter-list'])}>
                                {filter?.choices?.map((choice) => {
                                    const { label, value, checked, id, slug } =
                                        choice
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

                if (isRangeFilter(filter)) {
                    return (
                        <RangeFilter
                            key={filter.id}
                            {...filter}
                        />
                    )
                }
            })}
        </>
    )
})

FilterList.displayName = 'FilterList'
