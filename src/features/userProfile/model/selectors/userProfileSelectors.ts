import { StateSchema } from '@/app/providers/StoreProvider'

export class UserProfileSelectors {
    static getData(state: StateSchema) {
        return state.userProfile.fields
    }
    static getWishList(state: StateSchema) {
        return state.userProfile.fields.favorites
    }
    static getIsAuth(state: StateSchema) {
        return state.userProfile.isAuth
    }
    static getIsAuthLoading(state: StateSchema) {
        return state.userProfile.isAuthLoading
    }
    static getIsLoading(state: StateSchema) {
        return state.userProfile.loading
    }

    static getIsLoadingWishList(state: StateSchema) {
        return state.userProfile.wishListLoading
    }
}
