'use client'

import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { useGetProductFiltersQuery } from '../../model/api/productApi'
import { FilterGroup } from './components/FilterGroupContainer/FilterGroup'

import s from './ProductFilter.module.scss'

export const ProductFilter = () => {
    const { data } = useGetProductFiltersQuery()

    return (
        <div className={s.ProductFilter}>
            <FilterGroup title="Категории">
                <CheckBox label="Стиральные машинки">
                    <CheckBox label="Стиральные машинки">
                        <CheckBox label="Стиральные машинки и холодильники" />
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
