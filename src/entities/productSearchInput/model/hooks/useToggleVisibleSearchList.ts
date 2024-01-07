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

    useEffect(() => {
        if (products.length) {
            dispatch(toggleVisibleSearchList(true))
            return
        }
        dispatch(toggleVisibleSearchList(false))
    }, [products, dispatch])
}
