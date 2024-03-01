import { ChangeEvent, useCallback, useEffect } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'

import { ProductSelectors } from '../selectors/productSelectors'
import { productActions } from '../slice/productSlice'
import { ICheckedFilters } from '../types/productListTypes'

interface IUseChecked {
    id: string
    key: string
    value: string
    label: string
}
/**
 * Хук дублирует состояние чекбокса для сохранения состояние между переходами по страницам
 */
export const useChecked = (props: IUseChecked) => {
    const { id, key, value, label } = props
    const actions = useActionCreators(productActions)

    const currentFilter = useAppSelector((state) =>
        ProductSelectors.getFilterById(state)(id)
    ) as ICheckedFilters

    useEffect(() => {
        actions.initialCreateFilter({ id, checked: false, key, value, label })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (!id) return

            const filter = { id, checked: e.target.checked }

            actions.changeCheckedValue(filter)
        },
        [id, actions]
    )

    return { currentFilter, onChange }
}
