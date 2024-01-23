import { StateSchema } from '@/app/providers/StoreProvider'

export class SettingSelectors {
    static getSetting(state: StateSchema) {
        return state.setting.fields
    }

    static getLogo(state: StateSchema) {
        return state.setting.fields.homeLogo
    }

    static getIsLoading(state: StateSchema) {
        return state.setting.loading
    }
    
    static getCurrency(state: StateSchema) {
        return state.setting.fields.currency
    }
}
