import {
    getSearchProductParams,
    searchProductParamsActions,
} from '@/entities/searchProductParams'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'

/**
 * Хук возвращает обработчик onChange,
 * который используется для работы в productSearchInput
 * когда patch равень '/shop'
 */
export const useOnChangeForShopPage = () => {
    const usp = useAppSelector(getSearchProductParams)
    const uspInstance = new URLSearchParams(usp)
    const dispatch = useAppDispatch()

    const onChangeForShopPage = (value: string) => {
        if (!value) {
            uspInstance.delete('search')
            dispatch(searchProductParamsActions.setUSP(uspInstance.toString()))
            return
        }
        uspInstance.set('search', value)
        dispatch(searchProductParamsActions.setUSP(uspInstance.toString()))
    }

    return { onChangeForShopPage }
}
