import { useCallback, useEffect } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'

import { ProductSelectors } from '../..'
import { productActions } from '../slice/productSlice'
import { IRangeFilters } from '../types/productListTypes'

interface InitialProps {
    id: string
}

export const useRange = ({ id }: InitialProps) => {
    const filter = useAppSelector((state) =>
        ProductSelectors.getFilterById(state)(id)
    ) as IRangeFilters | undefined

    const actions = useActionCreators(productActions)

    const value1 = filter?.value1
    const value2 = filter?.value2
    const key1 = filter?.key1
    const key2 = filter?.key2

    const onChange1 = useCallback(
        (value: string) => {
            actions.changeRangeValue({
                id,
                name: key1!,
                value,
            })
        },
        [actions, id]
    )

    const onChange2 = useCallback(
        (value: string) => {
            actions.changeRangeValue({
                id,
                name: key2!,
                value,
            })
        },
        [actions, id]
    )

    return {
        onChange1,
        onChange2,
        value1,
        value2,
    }
}
