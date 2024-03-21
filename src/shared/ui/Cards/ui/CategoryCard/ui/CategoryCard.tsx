import Image from 'next/image'

import { CustomCategoryLink } from '@/entities/categories'

import { type ChildrenCategory } from '@/app/types/category'

import s from './CategoryCard.module.scss'

interface Props {
    category: ChildrenCategory
}

export const CategoryCard = (props: Props) => {
    const { categoryId, image, name, upperCategories } = props.category

    return (
        <CustomCategoryLink
            categoryId={categoryId}
            className={s.container}>
            <Image
                alt={`Изображение ${name}`}
                width={100}
                height={100}
                className={s.img}
                src={process.env.NEXT_PUBLIC_URL_BACKEND! + image}
            />
            <h2 className={s.title}>{name}</h2>
        </CustomCategoryLink>
    )
}
