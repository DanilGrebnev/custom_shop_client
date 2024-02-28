'use client'

import { memo } from 'react'

import Link from 'next/link'

import { useAppDispatch } from '@/shared/hooks'
import { Title } from '@/shared/ui/Title'

import { ICategory } from '@/app/types/category'

import s from './DropDown.module.scss'

interface IDropDown {
    categories: ICategory[]
}

export const DropDown = memo((props: IDropDown) => {
    const { categories } = props

    return (
        <nav>
            <Title hidden={true}>Category menu</Title>
            <ul className={s['category-widget-content']}>
                {categories.map((category) => {
                    const { id, name } = category
                    return (
                        <li
                            className={s.link}
                            key={id}>
                            <Link href="/shop">{name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
})

DropDown.displayName = 'DropDown'
