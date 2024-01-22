import { StateSchema } from '@/app/providers/StoreProvider'

export class LoginSelector {
    static getUsername(state: StateSchema) {
        return state.login.fields.username
    }
    static getPassword(state: StateSchema) {
        return state.login.fields.password
    }
    static getIsLoading(state: StateSchema) {
        return state.login.loading
    }
    static getIsAuth(state: StateSchema) {
        return state.login.isAuth
    }
}
