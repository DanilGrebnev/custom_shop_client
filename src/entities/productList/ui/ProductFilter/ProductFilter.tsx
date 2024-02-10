'use client'

import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { useGetProductFiltersQuery } from '../../model/api/productApi'
import { FilterGroup } from './components/FilterGroupContainer/FilterGroup'

import s from './ProductFilter.module.scss'

export const ProductFilter = () => {
    const { data } = useGetProductFiltersQuery()

    data?.filters.forEach((item) => {
        console.log(item)
    })

    return (
        <div className={s.ProductFilter}>
            <FilterGroup title="Категории">
                <CheckBox label="акустика">
                    <CheckBox label="акустика">
                        <CheckBox label="акустика" />
                    </CheckBox>
                </CheckBox>
                <CheckBox label="акустика" />
                <CheckBox label="акустика" />
                <CheckBox label="акустика" />
                <CheckBox label="акустика" />
                <CheckBox label="акустика" />
                <CheckBox label="акустика" />
            </FilterGroup>
        </div>
    )
}
