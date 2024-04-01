import { StateSchema } from '@/app/providers/StoreProvider'
import { Choice } from '@/app/types/product'

import { createSelector } from '@reduxjs/toolkit'

const getAllFilters = (state: StateSchema) => {
    return state.product.filters
}

export class ProductSelectors {
    static getAllFilters = getAllFilters

    static getIsOpenFilter(state: StateSchema) {
        return state.product.openFilter
    }

    static getActiveFilters = createSelector(
        [getAllFilters],

        (filters) => {
            return filters.reduce<Choice[]>((activeFilters, filter) => {
                filter.choices.forEach((choice) => {
                    if (choice?.checked) activeFilters.push(choice)
                })
                return activeFilters
            }, [])
        }
    )

    static getUsp(state: StateSchema) {
        return state.product.usp
    }
}
