import { StateSchema } from '@/app/providers/StoreProvider'

export class UserProfileSelectors {
    static getIsAuth(state: StateSchema) {
        return state.userProfile?.isAuth
    }

    static getIsOpenBasketModal(state: StateSchema) {
        return state.userProfile.isOpenBasketModal
    }
}
