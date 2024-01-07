import { StateSchema } from '@/app/providers/StoreProvider'

export class ProductListSelectors {
    static getProducts(state: StateSchema) {
        return state.productList.products
    }

    static getTotalCount(state: StateSchema) {
        return state.productList.totalCount
    }

    static getIsLoading(state: StateSchema) {
        return state.productList.loading
    }

    static getError(state: StateSchema) {
        return state.productList.error
    }
}
