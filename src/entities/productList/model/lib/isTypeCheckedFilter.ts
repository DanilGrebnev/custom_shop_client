import { ICheckedFilters, IRangeFilters } from '../types/productListTypes'

// type guard function
export function isTypeCheckedFilter(
    filter: ICheckedFilters | IRangeFilters
): filter is ICheckedFilters {
    return 'checked' in filter
}
