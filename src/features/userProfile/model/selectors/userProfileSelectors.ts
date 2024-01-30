import { StateSchema } from '@/app/providers/StoreProvider'

export class UserProfileSelectors {
    static getData(state: StateSchema) {
        return state.userProfile.fields
    }
    static getWishList(state: StateSchema) {
        return state.userProfile.fields.favorites
    }

    static getIsLoadingWishList(state: StateSchema) {
        return state.userProfile.wishListLoading
    }
}
