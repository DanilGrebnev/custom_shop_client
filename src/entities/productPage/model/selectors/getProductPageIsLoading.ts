import { StateSchema } from '@/app/providers/StoreProvider'

export const getProductPageIsLoading = (state: StateSchema) => {
    return state.productPage.loading
}
