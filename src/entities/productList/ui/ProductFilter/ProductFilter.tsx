'use client'

import { memo } from 'react'

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

    return (
        <div className={s.ProductFilter}>
            {data?.filters.map((filter) => {
                if (filter.code === 'category') {
                    return (
                        <FilterGroup
                            title={filter.label}
                            key={v4()}>
                            {filter.choices.map((categoryItem) => {
                                return categoryItem.children.length ? (
                                    <CustomCheckBox
                                        id={categoryItem.label}
                                        label={categoryItem.label}
                                        key={v4()}>
                                        {renderCategoryChildren(
                                            categoryItem.children
                                        )}
                                    </CustomCheckBox>
                                ) : (
                                    <CustomCheckBox
                                        key={v4()}
                                        id={categoryItem.label}
                                        label={categoryItem.label}
                                    />
                                )
                            })}
                        </FilterGroup>
                    )
                }

                if (filter.code === 'color' || filter.code === 'rating') {
                    return (
                        <FilterGroup
                            type={filter.code as 'color'}
                            title={filter.label}
                            key={v4()}>
                            {choicesRender(
                                filter.choices,
                                filter.code as 'color' | 'rating'
                            )}
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

        if (children.length) {
            return (
                <CustomCheckBox
                    key={v4()}
                    id={label}
                    label={label}>
                    {renderCategoryChildren(children)}
                </CustomCheckBox>
            )
        }

        return (
            <CustomCheckBox
                key={v4()}
                id={label}
                label={label}
            />
        )
    })
}

function choicesRender(
    choices: IProductFilterChoicesItem[],
    code: 'color' | 'rating'
) {
    if (code === 'color') {
        return choices.map((choice) => (
            <CustomColorCheckBox
                key={v4()}
                id={choice.label}
                labelcolor={choice.label}
            />
        ))
    }

    return choices.map((choice) => (
        <CustomRatingCheckBox
            key={v4()}
            id={choice.label}
            rating={choice.value}
        />
    ))
}

ProductFilter.displayName = 'ProductFilter'
