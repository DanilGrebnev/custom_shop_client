import { StateSchema } from '@/app/providers/StoreProvider'

export class ProductSelectors {
    static getAllFilters = (state: StateSchema) => {
        return state.product.filters
    }

    static getIsOpenFilter(state: StateSchema) {
        return state.product.openFilter
    }

    static getUsp(state: StateSchema) {
        return state.product.usp
    }
}
