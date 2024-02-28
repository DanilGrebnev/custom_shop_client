'use client'

import { memo, useEffect } from 'react'

import { IProductFilterChoicesItem } from '@/app/types/product'

import { useGetProductFiltersQuery } from '../../model/api/productApi'
import s from './ProductFilter.module.scss'
import {
    CustomCheckBox,
    CustomColorCheckBox,
    CustomRatingCheckBox,
} from './components/CheckBoxFilters'
import { FilterGroup } from './components/FilterGroupContainer/FilterGroup'

import { v4 } from 'uuid'

export const ProductFilter = memo(() => {
    const { data } = useGetProductFiltersQuery()

    useEffect(() => {
        // console.log(data)
    }, [data])

    return (
        <div className={s.ProductFilter}>
            {data?.filters.map((filter) => {
                if (filter.code === 'category') {
                    return (
                        <FilterGroup
                            title={filter.label}
                            key={v4()}>
                            {filter.choices.map((choice) => {
                                return choice.children.length ? (
                                    <CustomCheckBox
                                        choice={choice}
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
                                        choice={choice}
                                        id={choice.label}
                                        label={choice.label}
                                    />
                                )
                            })}
                        </FilterGroup>
                    )
                }

                if (filter.code === 'color') {
                    return (
                        <FilterGroup
                            type={filter.code as 'color'}
                            title={filter.label}
                            key={v4()}>
                            {filter.choices.map((choice) => {
                                return (
                                    <CustomColorCheckBox
                                        urlparams={{
                                            value: choice.value,
                                            key: filter.code,
                                        }}
                                        key={v4()}
                                        id={choice.label}
                                        labelcolor={choice.label}
                                    />
                                )
                            })}
                        </FilterGroup>
                    )
                }

                if (filter.code === 'rating') {
                    return (
                        <FilterGroup
                            title={filter.label}
                            key={v4()}>
                            {filter.choices.map((choice) => {
                                return (
                                    <CustomRatingCheckBox
                                        urlparams={{
                                            value: choice.value,
                                            key: filter.code,
                                        }}
                                        key={v4()}
                                        id={choice.label}
                                        rating={choice.value}
                                    />
                                )
                            })}
                        </FilterGroup>
                    )
                }
            })}
        </div>
    )
})

function renderCategoryChildren(filters: IProductFilterChoicesItem[]) {
    return filters.map((filter) => {
        const { children, label } = filter

        return children.length ? (
            <CustomCheckBox
                key={v4()}
                choice={filter}
                id={label}
                label={label}>
                {renderCategoryChildren(children)}
            </CustomCheckBox>
        ) : (
            <CustomCheckBox
                key={v4()}
                choice={filter}
                id={label}
                label={label}
            />
        )
    })
}

ProductFilter.displayName = 'ProductFilter'
