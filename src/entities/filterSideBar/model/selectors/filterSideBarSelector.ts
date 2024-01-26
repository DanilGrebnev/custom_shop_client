import { StateSchema } from '@/app/providers/StoreProvider'

export class FilterSideBarSelector {
    static getFilters(state: StateSchema) {
        return state.filterSideBar.filters
    }

    static getIsLoading(state: StateSchema) {
        return state.filterSideBar.loading
    }
    static getError(state: StateSchema) {
        return state.filterSideBar.error
    }

    static getFilterItemByName(state: StateSchema) {
        return (name: string) => state.filterSideBar.filtersItem[name]
    }
}
