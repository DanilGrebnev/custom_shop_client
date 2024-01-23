import { StateSchema } from '@/app/providers/StoreProvider'

export class UserProfileSelectors {
    static getData(state: StateSchema) {
        return state.userProfile.fields
    }
}
