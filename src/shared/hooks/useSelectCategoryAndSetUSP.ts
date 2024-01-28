import { ICategory } from '@/app/types/category'
import { filterSideBarActions } from '@/entities/filterSideBar/model/slice/filterSideBarSlice'
import { useAppDispatch } from '.'
import { useRouter } from 'next/navigation'
import { searchProductParamsActions } from '@/entities/searchProductParams'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { getSearchProductParams } from '@/entities/searchProductParams'
import { useAppSelector } from '.'
import { useCallback } from 'react'

/**
 * хук устанавливает флаг checked на выбранную категорию
 * и также устанавливает USP `category=${category slug}`
 */
export const useSelectCategoryAndSetUSP = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const USP = useAppSelector(getSearchProductParams)
    const { setFilterValue } = filterSideBarActions

    const onClick = useCallback(
        ({ name, slug }: { name: string; slug: string }) => {
            const usp = new URLSearchParams(USP)

            usp.append('category', slug)

            dispatch(setFilterValue({ name, checked: true }))
            dispatch(searchProductParamsActions.setUSP(usp.toString()))

            router.push(NavigationRoutes.shop())
        },
        [dispatch, setFilterValue, router, USP]
    )

    return onClick
}
