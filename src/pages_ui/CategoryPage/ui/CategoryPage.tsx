'use client'

import { usePathname } from 'next/navigation'

import { useGetCategoryByParentIdQuery } from '@/entities/categories'

import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { CategoryCard } from '@/shared/ui/Cards'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './CategoryPage.module.scss'

import clsx from 'clsx'

interface CategoryPage {
    categoryId?: string[]
}

export const CategoryPage = ({ categoryId }: CategoryPage) => {
    const categoryID = categoryId?.[0]
    const pathName = usePathname()
    const { data } = useGetCategoryByParentIdQuery(categoryID)

    const baseBreadCrumbItem = [
        {
            label: 'Каталог',
            href: '/category',
            active: pathName === '/category',
        },
    ]

    const breadCrumbs =
        data?.[0].upperCategories.reduce((acc, el, i, arr) => {
            const item = {
                label: el.name,
                href: NavigationRoutes.category(el.categoryId),
                active: i + 1 === arr.length ? true : false,
            }
            acc.push(item)
            return acc
        }, baseBreadCrumbItem) || baseBreadCrumbItem

    return (
        <>
            <BreadCrumbs breadcrumbs={[...breadCrumbs]} />

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
