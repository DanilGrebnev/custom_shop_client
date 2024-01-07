import { StateSchema } from '@/app/providers/StoreProvider'

export class ProductListPaginationSelectors {
    static getPreviewItemsOnPage(state: StateSchema) {
        return state.productListPagination.previewItemsOnPage
    }
}
