import { filterSideBarActions } from '@/entities/filterSideBar/model/slice/filterSideBarSlice'
import { useAppDispatch } from '.'
import { useRouter } from 'next/navigation'
import { searchProductParamsActions } from '@/entities/searchProductParams'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { useAppSelector } from '.'
import { useCallback } from 'react'

/**
 * хук устанавливает флаг checked на выбранную категорию
 * и также устанавливает USP `category=${category slug}`
 */
export const useSelectCategoryAndSetUSP = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { setFilterValue, resetAllFilterItems } = filterSideBarActions
    // const allFilterItems = useAppSelector('')

    const onClick = useCallback(
        ({ name, slug }: { name: string; slug: string }) => {
            dispatch(resetAllFilterItems(name))
            dispatch(setFilterValue({ name, checked: true }))
            dispatch(searchProductParamsActions.setUSP(`category=${slug}`))

            router.push(NavigationRoutes.shop())
        },
        [dispatch, resetAllFilterItems, setFilterValue, router]
    )

    return onClick
}
