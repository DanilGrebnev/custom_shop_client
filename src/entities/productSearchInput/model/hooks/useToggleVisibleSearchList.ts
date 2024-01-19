import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { useEffect } from 'react'
import { ProductSearchInputState, toggleVisibleSearchList } from '../..'

/**
 * Хук показывает или скрывает список товаров
 * в productSearchInput
 */
export const useToggleVisibleSearchList = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(ProductSearchInputState.getProducts)

    const isHidden = useAppSelector(
        ProductSearchInputState.getIsHiddenSearchList
    )

    useEffect(() => {
        if (products.length && !isHidden) {
            dispatch(toggleVisibleSearchList(true))
            return
        }
        dispatch(toggleVisibleSearchList(false))
    }, [products, isHidden, dispatch])
}
