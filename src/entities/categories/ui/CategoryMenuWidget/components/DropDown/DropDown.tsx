'use client'

import { memo } from 'react'

import Link from 'next/link'

import { productActions } from '@/entities/productList/model/slice/productSlice'

import { useAppDispatch } from '@/shared/hooks'
import { Title } from '@/shared/ui/Title'

import { ICategory } from '@/app/types/category'

import s from './DropDown.module.scss'

interface IDropDown {
    categories: { label: string; id: string }[]
}

export const DropDown = memo((props: IDropDown) => {
    const { categories } = props
    const dispatch = useAppDispatch()

    const onClick = (id: string) => {
        dispatch(productActions.changeCheckedValue({ id, checked: true }))
    }

    return (
        <nav>
            <Title hidden={true}>Category menu</Title>
            <ul className={s['category-widget-content']}>
                {categories.map((category) => {
                    const { id, label } = category

                    return (
                        <li
                            onClick={onClick.bind(null, id)}
                            className={s.link}
                            key={id}>
                            <Link href="/shop">{label}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
})

DropDown.displayName = 'DropDown'
