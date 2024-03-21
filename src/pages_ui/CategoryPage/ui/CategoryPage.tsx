'use client'

import { useGetCategoryByParentIdQuery } from '@/entities/categories'

import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { CategoryCard } from '@/shared/ui/Cards'

import s from './CategoryPage.module.scss'

import clsx from 'clsx'

interface CategoryPage {
    categoryId?: string[]
}

export const CategoryPage = ({ categoryId }: CategoryPage) => {
    const categoryID = categoryId?.[0]
    const { data } = useGetCategoryByParentIdQuery(categoryID)

    return (
        <>
            <BreadCrumbs breadcrumbs={[{ label: 'Категории', href: '123' }]} />

            <div className={clsx(s.page, 'contain')}>
                <h1>Страница категорий {categoryId}</h1>
                <div className={s['category-list']}>
                    {data?.map((category, i) => (
                        <CategoryCard
                            key={i}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
