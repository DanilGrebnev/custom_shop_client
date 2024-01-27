import { memo } from 'react'
import { Title } from '@/shared/ui/Title'
import { ICategory } from '@/app/types/category'
import { filterSideBarActions } from '@/entities/filterSideBar/model/slice/filterSideBarSlice'
import { useAppDispatch } from '@/shared/hooks'

import Link from 'next/link'
import s from './DropDown.module.scss'
import { useRouter } from 'next/navigation'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

interface IDropDown {
    categories: ICategory[]
}

export const DropDown = memo((props: IDropDown) => {
    const router = useRouter()

    const { categories } = props
    const dispatch = useAppDispatch()
    const { setFilterValue } = filterSideBarActions

    const onClick = (name: string) => {
        dispatch(setFilterValue({ name, defChecked: true }))
        router.push(NavigationRoutes.shop())
    }

    return (
        <nav>
            <Title hidden={true}>Category menu</Title>
            <ul className={s['category-widget-content']}>
                {categories.map(({ id, name }) => (
                    <li
                        key={id}
                        onClick={() => onClick(name)}>
                        <Link href="/shop">{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
})

DropDown.displayName = 'DropDown'
