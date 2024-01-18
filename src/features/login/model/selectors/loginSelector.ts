import { StateSchema } from '@/app/providers/StoreProvider'

export class LoginSelector {
    static getLogin(state: StateSchema) {
        return state.login.fields.login
    }
    static getPassword(state: StateSchema) {
        return state.login.fields.password
    }
}
