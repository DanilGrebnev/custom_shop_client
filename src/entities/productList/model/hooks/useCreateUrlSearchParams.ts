import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'

import { ProductSelectors } from '../selectors/productSelectors'
import { productActions } from '../slice/productSlice'

export const useCreateUrlSearchParams = () => {
    const { setUrlSearchParams } = productActions
    const dispatch = useAppDispatch()
    const filters = useAppSelector(ProductSelectors.getAllFilters)
    const usp = useAppSelector(ProductSelectors.getUsp)
}
