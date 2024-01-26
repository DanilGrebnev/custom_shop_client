import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { ChangeEvent, useCallback, useEffect } from 'react'
import { filterSideBarActions } from '../slice/filterSideBarSlice'
import { FilterSideBarSelector } from '../selectors/filterSideBarSelector'

interface IUseSetValueInReduxProps {
    name: string
}

type TReturnUseSetValueInRedux = [
    {
        value?: string | undefined
        defaultValue?: string | undefined
        name: string
        checked?: boolean | undefined
    },
    (e: ChangeEvent<HTMLInputElement>) => void
]

type TUseSetValueInRedux = (
    props: IUseSetValueInReduxProps
) => TReturnUseSetValueInRedux

export const useSetValueInRedux: TUseSetValueInRedux = ({ name }) => {
    const dispatch = useAppDispatch()

    const thisInput = useAppSelector((state) =>
        FilterSideBarSelector.getFilterItemByName(state)(name)
    )

    const setValueInRedux = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                filterSideBarActions.setFilterValue({
                    name,
                    checked: e.target.checked,
                })
            )
        },
        [dispatch, name]
    )

    return [thisInput, setValueInRedux]
}
