import { StateSchema } from '@/app/providers/StoreProvider'

export class RegistrationSelectors {
    static getEmail(state: StateSchema) {
        return state.registration.email
    }
    static getFirstName(state: StateSchema) {
        return state.registration.first_name
    }
    static getLastName(state: StateSchema) {
        return state.registration.last_name
    }
    static getPassword(state: StateSchema) {
        return state.registration.password
    }
}
