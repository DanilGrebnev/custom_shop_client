'use client'

import { memo, useState } from 'react'

import SettingIcon from '@/shared/assets/setting.svg'
import { useAppSelector } from '@/shared/hooks'

import {
    IProductChoiceFilter,
    isChoiceFilter,
    isRangeFilter,
} from '@/app/types/product'

import { ProductSelectors } from '../..'
import { useGetProductFiltersQuery } from '../../model/api/productApi'
import s from './ProductFilter.module.scss'
import {
    CustomCheckBox,
    CustomColorCheckBox,
    CustomRatingCheckBox,
} from './components/CheckBoxFilters'
import { FilterGroup } from './components/FilterGroupContainer/FilterGroup'
import { CustomRangeFilter } from './components/FilterRangeItem/CustomRangeFilter'

import clsx from 'clsx'
import { v4 } from 'uuid'

interface IProductFilter {
    className?: string
}

export const ProductFilter = memo(({ className }: IProductFilter) => {
    const { data } = useGetProductFiltersQuery()

    const isOpen = useAppSelector(ProductSelectors.getIsOpenFilter)

    return (
        <div
            className={clsx(
                s.ProductFilter,
                { [s.isOpen]: isOpen },
                className
            )}>
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
                            title={`${filter.label}, ${filter.measure}`}>
                            <CustomRangeFilter id={filter.label} />
                        </FilterGroup>
                    )
                }
            })}
        </div>
    )
})
ProductFilter.displayName = 'ProductFilter'

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
