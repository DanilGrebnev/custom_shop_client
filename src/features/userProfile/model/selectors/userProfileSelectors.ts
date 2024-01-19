import { StateSchema } from '@/app/providers/StoreProvider'

export class UserProfileSelectors {
    getData(state: StateSchema) {
        return state.userProfile
    }
}
