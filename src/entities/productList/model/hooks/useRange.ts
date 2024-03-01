import { useCallback, useEffect } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'

import { ProductSelectors } from '../..'
import { productActions } from '../slice/productSlice'
import { IRangeFilters } from '../types/productListTypes'

interface InitialProps {
    id: string
    label: string
    key1: string
    key2: string
    value1: string
    value2: string
}

export const useRange = (props: InitialProps) => {
    const { id } = props

    const actions = useActionCreators(productActions)

    useEffect(() => {
        actions.initialCreateFilter(props)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChange1 = useCallback(
        (key: string, value: string) => {
            actions.changeRangeValue({
                id,
                name: key,
                value,
            })
        },
        [actions, id]
    )

    const onChange2 = useCallback(
        (key: string, value: string) => {
            actions.changeRangeValue({
                id,
                name: key,
                value,
            })
        },
        [actions, id]
    )

    return {
        onChange1,
        onChange2,
    }
}
