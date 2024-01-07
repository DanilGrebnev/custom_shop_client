import { StateSchema } from '@/app/providers/StoreProvider'
/**
 * Принимает redux-state и возвращает параметры строки запроса,
 * конфигурирующиеся из фильтров
 * @param fullState
 * @returns state.searchProductParams.usp
 */
export const getSearchProductParams = (state: StateSchema) => {
    return state.searchProductParams.usp
}
