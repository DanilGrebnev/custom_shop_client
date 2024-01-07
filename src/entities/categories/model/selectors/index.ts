import { StateSchema } from '@/app/providers/StoreProvider'

export const getCategoryData = (state: StateSchema) => {
    return state.categories.category
}

export const getCategoryIsLoading = (state: StateSchema) => {
    return state.categories.isLoading
}

export const getCategoryIsError = (state: StateSchema) => {
    return state.categories.isError
}
