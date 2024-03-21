import { ReactNode } from 'react'

import { CustomCategoryLink } from '@/entities/categories'

import { CategoryWithChildren } from '@/app/types/category'

import s from './ChildrenItem.module.scss'

interface Props {
    categoryItem: CategoryWithChildren
    children?: ReactNode
}

const Item = (props: Props) => {
    const { categoryItem, children } = props
    const { name, categoryId, last } = categoryItem

    return (
        <div
            data-name={name}
            className={s.container}>
            <CustomCategoryLink
                last={last}
                categoryId={categoryId}>
                {name}
            </CustomCategoryLink>

            {children && (
                <div className={s['children-dropdown']}>{children}</div>
            )}
        </div>
    )
}

export const ChildrenItem = (props: Props) => {
    return <Item categoryItem={props.categoryItem}>{props.children}</Item>
}
