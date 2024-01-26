import {
    getSearchProductParams,
    searchProductParamsActions,
} from '@/entities/searchProductParams'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { ChangeEvent, useCallback } from 'react'

interface IOnChange {
    name: string
    value: string
}

/**
 * Хук возвращает onChange для checkBox фильтров.
 * onChange формирует query параметры и устанавливает их
 * в хранилище searchProductParams
 */
export const useOnChangeListFilter = () => {
    const dispatch = useAppDispatch()
    const searchParams = useAppSelector(getSearchProductParams)

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>, { name, value }: IOnChange) => {
            const usp = new URLSearchParams(searchParams)

            if (e.target.checked) {
                usp.append(name, value)
                dispatch(searchProductParamsActions.setUSP(usp.toString()))
            } else {
                const filter = name + '=' + value

                const updatedUsp = new URLSearchParams(
                    usp.toString().replace(filter, '')
                ).toString()

                dispatch(searchProductParamsActions.setUSP(updatedUsp))
            }
        },
        [dispatch, searchParams]
    )

    return onChange
}
