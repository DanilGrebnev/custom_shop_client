import { StateSchema } from '@/app/providers/StoreProvider'

export class ProductSelectors {
    static getTotalCount(state: StateSchema) {
        return state.productList.totalCount
    }

    static getFilterById(state: StateSchema) {
        return (id: string | undefined) => {
            return state.productList.filters.find((item) => item.id === id)
        }
    }
}
