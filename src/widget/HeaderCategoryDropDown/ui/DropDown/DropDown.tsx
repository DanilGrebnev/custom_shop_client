'use client'

import { memo } from 'react'

import { useGetAllCategoriesQuery } from '@/entities/categories'

import { Title } from '@/shared/ui/Title'

import { DropDownItem } from '../DropDownItem/DropDownItem'
import s from './DropDown.module.scss'

export const DropDown = memo(() => {
    const { data: categoryData } = useGetAllCategoriesQuery()

    return (
        <nav>
            <Title hidden={true}>Список категорий</Title>
            <ul className={s.list}>
                {categoryData?.map((category) => {
                    const { categoryId, children } = category

                    return (
                        <DropDownItem
                            key={categoryId}
                            categoryItem={category}
                            childrens={children}
                        />
                    )
                })}
            </ul>
        </nav>
    )
})

DropDown.displayName = 'DropDown'
