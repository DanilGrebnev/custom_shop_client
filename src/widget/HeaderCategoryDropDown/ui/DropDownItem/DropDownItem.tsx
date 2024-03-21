import { CustomCategoryLink } from '@/entities/categories'

import { CategoryWithChildren } from '@/app/types/category'

import { ChildrenItem } from '../ChildrenItem/ChildrenItem'
import s from './DropDownItem.module.scss'

interface Props {
    categoryItem: CategoryWithChildren
    childrens?: CategoryWithChildren[]
}

export const DropDownItem = (props: Props) => {
    const { categoryItem, childrens } = props
    const { name, categoryId, last } = categoryItem

    return (
        <li className={s['drop-down-container']}>
            <CustomCategoryLink
                className={s['item__content']}
                categoryId={categoryId}
                last={last}>
                {name}
            </CustomCategoryLink>
            {childrens?.length ? (
                <div className={s['children-drop-down']}>
                    {childrensRender(childrens)}
                </div>
            ) : null}
        </li>
    )
}

function childrensRender(childrens: CategoryWithChildren[]) {
    return (
        <div className={s['papper-container']}>
            {childrens.map((categoryItem) => {
                return (
                    <ChildrenItem
                        key={categoryItem.categoryId}
                        categoryItem={categoryItem}>
                        {categoryItem.children.length
                            ? childrensRender(categoryItem.children)
                            : null}
                    </ChildrenItem>
                )
            })}
        </div>
    )
}
