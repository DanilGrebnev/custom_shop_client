import { ChangeEvent, useCallback, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'

import { ProductSelectors } from '../selectors/productListSelectors'
import { productActions } from '../slice/productListSlice'

interface IUseChecked {
    id: string | undefined
}
/**
 * Хук дублирует состояние чекбокса для сохранения состояние между переходами по страницам
 */
export const useChecked = (props: IUseChecked) => {
    const { id } = props

    const { initialCreateFilter, changeCheckedValue } = productActions
    const dispatch = useAppDispatch()

    const currentFilter = useAppSelector((state) =>
        ProductSelectors.getFilterById(state)(id)
    )

    useEffect(() => {
        dispatch(initialCreateFilter({ id, checked: false }))
    }, [])

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!id) return
        const filter = { id, checked: e.target.checked }

        dispatch(changeCheckedValue(filter))
    }, [])

    return { currentFilter, onChange }
}
