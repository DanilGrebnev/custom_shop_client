'use client'

import { memo } from 'react'
import { Title } from '@/shared/ui/Title'
import { ICategory } from '@/app/types/category'
import { useAppDispatch } from '@/shared/hooks'
import { useSelectCategoryAndSetUSP } from '@/shared/hooks'
import Link from 'next/link'
import s from './DropDown.module.scss'

interface IDropDown {
    categories: ICategory[]
}

export const DropDown = memo((props: IDropDown) => {
    const onClick = useSelectCategoryAndSetUSP()
    const { categories } = props

    return (
        <nav>
            <Title hidden={true}>Category menu</Title>
            <ul className={s['category-widget-content']}>
                {categories.map((category) => {
                    const { id, name } = category
                    return (
                        <li
                            key={id}
                            onClick={() => onClick(category)}>
                            <Link href="/shop">{name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
})

DropDown.displayName = 'DropDown'
