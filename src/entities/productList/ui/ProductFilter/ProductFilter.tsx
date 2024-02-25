'use client'

import { ReactNode, memo, useEffect } from 'react'

import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { ColorCheckBox } from '@/shared/ui/CheckBoxes/ColorCheckBox'
import { RatingCheckBox } from '@/shared/ui/CheckBoxes/RatingCheckBox'

import { IProductFilterChoicesItem } from '@/app/types/product'

import { useGetProductFiltersQuery } from '../../model/api/productApi'
import s from './ProductFilter.module.scss'
import { FilterGroup } from './components/FilterGroupContainer/FilterGroup'

import { v4 } from 'uuid'

export const ProductFilter = memo(() => {
    const { data } = useGetProductFiltersQuery()

    useEffect(() => {
        console.clear()
        console.log(data)
    }, [data])

    return (
        <div className={s.ProductFilter}>
            {data?.filters.map((filter) => {
                if (filter.code === 'category') {
                    return (
                        <FilterGroup
                            title={filter.label}
                            key={v4()}>
                            {filter.choices.map((categoryItem) => {
                                if (categoryItem.children.length) {
                                    return (
                                        <CheckBox
                                            label={categoryItem.label}
                                            key={v4()}>
                                            {renderCategoryChildren(
                                                categoryItem.children
                                            )}
                                        </CheckBox>
                                    )
                                }
                                return (
                                    <CheckBox
                                        key={v4()}
                                        label={categoryItem.label}
                                    />
                                )
                            })}
                        </FilterGroup>
                    )
                }
                if (
                    filter.type === 'choices' ||
                    filter.type === 'multiple_choices'
                ) {
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

ProductFilter.displayName = 'ProductFilter'

function choicesRender(
    choices: IProductFilterChoicesItem[],
    code: 'color' | 'rating'
) {
    if (code === 'color') {
        return choices.map((choice) => {
            return (
                <ColorCheckBox
                    labelcolor={choice.label}
                    key={v4()}
                />
            )
        })
    }
    if (code === 'rating') {
        return choices.map((choice) => {
            return (
                <RatingCheckBox
                    rating={choice.value}
                    key={v4()}
                />
            )
        })
    }
}

function renderCategoryChildren(
    filters: IProductFilterChoicesItem[]
): ReactNode {
    return filters.map((filter) => {
        const { children, label } = filter

        if (children.length) {
            return (
                <CheckBox
                    key={v4()}
                    label={label}>
                    {renderCategoryChildren(children)}
                </CheckBox>
            )
        }

        if (!children.length) {
            return (
                <CheckBox
                    key={v4()}
                    label={label}
                />
            )
        }
    })
}
