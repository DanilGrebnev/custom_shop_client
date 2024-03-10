'use client'

import { MouseEvent, memo, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'

import {
    IProductChoiceFilter,
    isChoiceFilter,
    isRangeFilter,
} from '@/app/types/product'

import { ProductSelectors, productActions } from '../..'
import { useGetProductFiltersQuery } from '../../model/api/productApi'
import { ActiveFilterListMobile } from '../ActiveFilterListMobile'
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
    const actions = useActionCreators(productActions)

    const isOpen = useAppSelector(ProductSelectors.getIsOpenFilter)

    const closeIfEscapeClick = (e: any) => {
        e.code === 'Escape' && actions.toggleOpenSetting(false)
    }

    useEffect(() => {
        document.addEventListener('keydown', closeIfEscapeClick)
        return () => document.removeEventListener('keydown', closeIfEscapeClick)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            className={clsx(
                s.ProductFilter,
                { [s.isOpen]: isOpen },
                className
            )}>
            <ActiveFilterListMobile />

            {data?.filters.map((filter) => {
                if (isChoiceFilter(filter)) {
                    if (filter.choices[0]?.children) {
                        return (
                            <FilterGroup
                                title={filter.label}
                                key={v4()}>
                                {filter.choices.map((choice) => {
                                    return choice.children?.length ? (
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

                // Если фильтр типа range
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
