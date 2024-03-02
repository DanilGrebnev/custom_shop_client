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
                                            key={v4()}
                                            id={choice.label}>
                                            {renderCategoryChildren(
                                                choice.children
                                            )}
                                        </CustomCheckBox>
                                    ) : (
                                        <CustomCheckBox
                                            key={v4()}
                                            id={choice.label}
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
                                if (filter.code === 'rating') {
                                    return (
                                        <CustomRatingCheckBox
                                            key={v4()}
                                            id={choice.label}
                                            rating={choice.value}
                                        />
                                    )
                                }

                                if (filter.code === 'color') {
                                    return (
                                        <CustomColorCheckBox
                                            key={v4()}
                                            id={choice.label}
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
                            <CustomRangeFilter filter={filter} />
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
                id={label}>
                {renderCategoryChildren(children)}
            </CustomCheckBox>
        ) : (
            <CustomCheckBox
                key={v4()}
                id={label}
            />
        )
    })
}

ProductFilter.displayName = 'ProductFilter'
