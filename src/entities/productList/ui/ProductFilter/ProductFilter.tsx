'use client'

import { memo, useEffect } from 'react'

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

    // useEffect(() => {
    //     console.clear()
    //     console.log(data)
    // }, [data])

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
                                    <CheckBox
                                        id={categoryItem.label}
                                        label={categoryItem.label}
                                        key={v4()}>
                                        {renderCategoryChildren(
                                            categoryItem.children
                                        )}
                                    </CheckBox>
                                ) : (
                                    <CheckBox
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

function choicesRender(
    choices: IProductFilterChoicesItem[],
    code: 'color' | 'rating'
) {
    if (code === 'color') {
        return choices.map((choice) => (
            <ColorCheckBox
                key={v4()}
                id={choice.label}
                labelcolor={choice.label}
            />
        ))
    }

    return choices.map((choice) => (
        <RatingCheckBox
            key={v4()}
            id={choice.label}
            rating={choice.value}
        />
    ))
}

function renderCategoryChildren(filters: IProductFilterChoicesItem[]) {
    return filters.map((filter) => {
        const { children, label } = filter

        if (children.length) {
            return (
                <CheckBox
                    key={v4()}
                    id={label}
                    label={label}>
                    {renderCategoryChildren(children)}
                </CheckBox>
            )
        }

        return (
            <CheckBox
                key={v4()}
                id={label}
                label={label}
            />
        )
    })
}

ProductFilter.displayName = 'ProductFilter'
