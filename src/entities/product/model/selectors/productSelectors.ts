import { StateSchema } from '@/app/providers/StoreProvider'

export class ProductSelectors {
    static getFilterById(state: StateSchema) {
        return (id: string | undefined) => {
            return state.product.filters.find((item) => item.id === id)
        }
    }

    static getAllFilters = (state: StateSchema) => {
        return state.product.filters
    }

    static getUsp(state: StateSchema) {
        return state.product.usp
    }
}
