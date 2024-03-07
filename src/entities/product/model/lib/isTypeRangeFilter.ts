import { ICheckedFilters, IRangeFilters } from '../types/productListTypes'

export const isTypeRangeFilter = (
    filter: ICheckedFilters | IRangeFilters
): filter is IRangeFilters => {
    return 'value1' in filter && 'value2' in filter
}
