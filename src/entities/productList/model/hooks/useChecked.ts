import { ChangeEvent, useCallback, useEffect } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'

import { ProductSelectors } from '../selectors/productSelectors'
import { productActions } from '../slice/productSlice'
import { ICheckedFilters } from '../types/productListTypes'

/**
 * Хук дублирует состояние чекбокса для сохранения состояние между переходами по страницам
 */
export const useChecked = (id: string) => {
    const actions = useActionCreators(productActions)

    const currentFilter = useAppSelector((state) =>
        ProductSelectors.getFilterById(state)(id)
    ) as ICheckedFilters

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
