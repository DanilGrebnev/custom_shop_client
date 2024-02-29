'use client'

import { memo, useEffect } from 'react'

import { RangeFilter } from '@/shared/ui/RangeFilter'

import {
    IProductCheckBoxFilter,
    IProductChoiceFilter,
    isChoiceFilter,
    isRangeFilter,
} from '@/app/types/product'

import { useGetProductFiltersQuery } from '../../model/api/productApi'
import s from './ProductFilter.module.scss'
import {
    CustomCheckBox,
    CustomColorCheckBox,
    CustomRatingCheckBox,
} from './components/CheckBoxFilters'
import { FilterGroup } from './components/FilterGroupContainer/FilterGroup'
import { CustomRangeFilter } from './components/FilterRangeItem/CustomRangeFilter'

import { v4 } from 'uuid'

export const ProductFilter = memo(() => {
    const { data } = useGetProductFiltersQuery()

    useEffect(() => {
        // console.log(data)
    }, [data])

    return (
        <div className={s.ProductFilter}>
            {data?.filters.map((filter) => {
                if (isChoiceFilter(filter)) {
                    if (filter.code === 'category') {
                        return (
                            <FilterGroup
                                title={filter.label}
                                key={v4()}>
                                {filter.choices.map((choice) => {
                                    return choice.children.length ? (
                                        <CustomCheckBox
                                            filter={choice}
                                            id={choice.label}
                                            label={choice.label}
                                            key={v4()}>
                                            {renderCategoryChildren(
                                                choice.children
                                            )}
                                        </CustomCheckBox>
                                    ) : (
                                        <CustomCheckBox
                                            key={v4()}
                                            filter={choice}
                                            id={choice.label}
                                            label={choice.label}
                                        />
                                    )
                                })}
                            </FilterGroup>
                        )
                    }

                    return (
                        <FilterGroup
                            key={v4()}
                            type={filter.code}
                            title={filter.label}>
                            {filter.choices.map((choice) => {
                                const props = {
                                    urlparams: {
                                        key: filter.code,
                                        value: choice.value,
                                    },
                                    filter: choice,
                                    id: choice.label,
                                }

                                if (filter.code === 'rating') {
                                    return (
                                        <CustomRatingCheckBox
                                            key={v4()}
                                            {...props}
                                            rating={choice.value}
                                        />
                                    )
                                }

                                if (filter.code === 'color') {
                                    return (
                                        <CustomColorCheckBox
                                            key={v4()}
                                            {...props}
                                            labelcolor={choice.label}
                                        />
                                    )
                                }
                            })}
                        </FilterGroup>
                    )
                }

                if (isRangeFilter(filter)) {
                    return (
                        <FilterGroup
                            key={v4()}
                            title={filter.label}>
                            <CustomRangeFilter
                                value1=""
                                onChange1={(key, value) => {
                                    console.log(key, value)
                                }}
                                onChange2={(key, value) => {
                                    console.log(key, value)
                                }}
                                filter={filter}
                            />
                        </FilterGroup>
                    )
                }
            })}
        </div>
    )
})

function renderCategoryChildren(filters: IProductChoiceFilter[]) {
    return filters.map((filter) => {
        const { children, label } = filter

        return children.length ? (
            <CustomCheckBox
                key={v4()}
                filter={filter}
                id={label}
                label={label}>
                {renderCategoryChildren(children)}
            </CustomCheckBox>
        ) : (
            <CustomCheckBox
                key={v4()}
                filter={filter}
                id={label}
                label={label}
            />
        )
    })
}

ProductFilter.displayName = 'ProductFilter'
