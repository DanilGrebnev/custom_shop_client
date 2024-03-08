'use client'

import { memo } from 'react'

import Link from 'next/link'

import { productActions } from '@/entities/product'

import { useAppDispatch } from '@/shared/hooks'
import { Title } from '@/shared/ui/Title'

import s from './DropDown.module.scss'

interface IDropDown {
    categories: { label: string; id: string }[]
}

export const DropDown = memo((props: IDropDown) => {
    const { categories } = props
    const dispatch = useAppDispatch()

    const onClick = (id: string) => {
        dispatch(productActions.changeOneCheckedValue({ id }))
    }

    return (
        <nav>
            <Title hidden={true}>Меню категорий</Title>
            <ul className={s['category-widget-content']}>
                {categories.map((category) => {
                    const { id, label } = category

                    return (
                        <li
                            key={id}
                            onClick={onClick.bind(null, id)}
                            className={s.link}>
                            <Link href="/shop">{label}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
})

DropDown.displayName = 'DropDown'
