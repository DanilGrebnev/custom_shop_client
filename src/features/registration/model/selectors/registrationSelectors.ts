import { StateSchema } from '@/app/providers/StoreProvider'

export class RegistrationSelectors {
    static getEmail(state: StateSchema) {
        return state.registration.fields.email
    }
    static getFirstName(state: StateSchema) {
        return state.registration.fields.first_name
    }
    static getLastName(state: StateSchema) {
        return state.registration.fields.last_name
    }
    static getPassword(state: StateSchema) {
        return state.registration.fields.password
    }
    static getIsLoading(state: StateSchema) {
        return state.registration.loading
    }
}
