import { ChangeEvent, useCallback, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'
import { addUrlParams } from '@/shared/lib/addUrlParams'
import { deleteUrlParams } from '@/shared/lib/deleteUrlParams'

import { ProductSelectors } from '../selectors/productSelectors'
import { productActions } from '../slice/productSlice'

interface IUseChecked {
    id: string | undefined
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
    )

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
