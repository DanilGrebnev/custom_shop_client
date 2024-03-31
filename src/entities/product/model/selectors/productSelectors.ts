import { StateSchema } from '@/app/providers/StoreProvider'

export class ProductSelectors {
    static getAllFilters = (state: StateSchema) => {
        return state.product.filters
    }

    static getIsCheckedFilterById(state: StateSchema) {
        return (id?: string) => {
            let checked: boolean | undefined = false

            for (let filter of state.product.filters) {
                for (let choice of filter.choices) {
                    if (choice.id === id) {
                        checked = choice.checked
                        break
                    }
                }
            }

            return checked
        }
    }

    static getIsOpenFilter(state: StateSchema) {
        return state.product.openFilter
    }

    static getUsp(state: StateSchema) {
        return state.product.usp
    }
}
