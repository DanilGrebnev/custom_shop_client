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
}
/**
 * Хук дублирует состояние чекбокса для сохранения состояние между переходами по страницам
 */
export const useChecked = (props: IUseChecked) => {
    const { id, key, value } = props
    const actions = useActionCreators(productActions)

    const storeUsp = useAppSelector(ProductSelectors.getUsp)

    const currentFilter = useAppSelector((state) =>
        ProductSelectors.getFilterById(state)(id)
    )

    useEffect(() => {
        actions.initialCreateFilter({ id, checked: false, key, value })
    }, [])

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (!id) return

            const checked = e.target.checked
            const filter = { id, checked }

            if (checked) {
                const updatedUsp = addUrlParams({ key, value, usp: storeUsp })
                actions.setUrlSearchParams(updatedUsp)
            }

            if (!checked) {
                const updatedUsp = deleteUrlParams({
                    filter: key + '=' + value,
                    usp: storeUsp,
                })

                actions.setUrlSearchParams(updatedUsp)
            }

            actions.changeCheckedValue(filter)
        },
        [storeUsp]
    )

    return { currentFilter, onChange }
}
