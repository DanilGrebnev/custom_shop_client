import { useMemo } from 'react'

import { useAppSelector } from '@/shared/hooks'

import { isTypeCheckedFilter } from '../lib/isTypeCheckedFilter'
import { ProductSelectors } from '../selectors/productSelectors'
import { ICheckedFilters } from '../types/productListTypes'

export const useCheckedActiveFilters = () => {
    const filters = useAppSelector(ProductSelectors.getAllFilters)

    const activeFilters = useMemo(
        () =>
            filters.filter((filter) => {
                if (isTypeCheckedFilter(filter) && filter.checked) {
                    return filter
                }
            }),
        [filters]
    )

    return activeFilters as ICheckedFilters[] | []
}
