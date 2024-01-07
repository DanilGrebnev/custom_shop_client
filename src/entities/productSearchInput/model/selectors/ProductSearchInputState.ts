import { StateSchema } from '@/app/providers/StoreProvider'

export class ProductSearchInputState {
    static getProducts(state: StateSchema) {
        return state.productSearchInput.products
    }

    static getInput(state: StateSchema) {
        return state.productSearchInput.input
    }

    static getIsOpenSearchList(state: StateSchema) {
        return state.productSearchInput.isOpenSearchList
    }

    static getIsLoading(state: StateSchema) {
        return state.productSearchInput.loading
    }
}
