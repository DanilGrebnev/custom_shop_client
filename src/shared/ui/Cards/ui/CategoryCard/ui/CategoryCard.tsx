import Image from 'next/image'
import Link from 'next/link'

import { Categories } from '@/app/types/category'

import s from './CategoryCard.module.scss'

interface Props {
    category: Categories
}

export const CategoryCard = (props: Props) => {
    const { categoryId, categoryName, image, filters } = props.category

    const link = filters ? '/shop' : `/category/${categoryId}`

    return (
        <Link
            href={link}
            className={s.container}>
            <Image
                alt={'1'}
                width={100}
                height={100}
                src={'/mock/images/base1.jpg'}
            />
            <h2 className={s.title}>{categoryName}</h2>
        </Link>
    )
}
