import { StateSchema } from '@/app/providers/StoreProvider'

export const getProductPageData = (state: StateSchema) => {
    return state.productPage.product
}
