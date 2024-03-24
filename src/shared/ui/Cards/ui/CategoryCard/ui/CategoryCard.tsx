import Image from 'next/image'

import { CustomCategoryLink } from '@/entities/categories'

import {
    CategoryWithChildren,
    type ChildrenCategory,
} from '@/app/types/category'

import s from './CategoryCard.module.scss'

interface Props {
    category: ChildrenCategory | CategoryWithChildren
}

export const CategoryCard = (props: Props) => {
    const { categoryId, image, name, last } = props.category

    return (
        <CustomCategoryLink
            categoryId={categoryId}
            last={last}
            className={s.container}>
            <Image
                alt={`Изображение ${name}`}
                width={100}
                height={100}
                className={s.img}
                src={image}
            />
            <h2 className={s.title}>{name}</h2>
        </CustomCategoryLink>
    )
}
