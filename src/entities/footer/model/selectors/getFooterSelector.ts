import { StateSchema } from '@/app/providers/StoreProvider'

export class GetFooterSelector {
    static getFooterData(state: StateSchema) {
        return state.footer.footer
    }
    static getFooterIsLoading(state: StateSchema) {
        return state.footer.loading
    }
    static getFooterError(state: StateSchema) {
        return state.footer.error
    }
}
