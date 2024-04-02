import { StateSchema } from '@/app/providers/StoreProvider'
import { Choice } from '@/app/types/product'
import { isChoiceFilter } from '@/app/types/product'

import { createSelector } from '@reduxjs/toolkit'

const getAllFilters = (state: StateSchema) => {
    return state.product.filters
}

export class ProductSelectors {
    static getAllFilters = getAllFilters

    static getIsOpenFilter(state: StateSchema) {
        return state.product.openFilter
    }

    static getFilterBySlug = createSelector(
        [getAllFilters, (_, slug: string) => slug],
        (filters, slug) => {
            return filters.find((filter) => filter.slug === slug)
        }
    )

    static getActiveFilters = createSelector(
        [getAllFilters],

        (filters) => {
            return filters.reduce((activeFilters, filter) => {
                if (isChoiceFilter(filter)) {
                    filter.choices.forEach((choice) => {
                        if (choice?.checked) activeFilters.push(choice)
                    })
                }

                return activeFilters
            }, [] as Choice[])
        }
    )

    static getUsp(state: StateSchema) {
        return state.product.usp
    }
}
