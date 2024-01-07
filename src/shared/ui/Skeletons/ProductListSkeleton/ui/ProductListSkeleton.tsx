import { type FC } from 'react'
import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'
import { ProductCardSkeleton } from '../../ProductCardSkeleton/ProductCardSkeleton'

import s from './ProductListSkeleton.module.scss'

interface IProductListSkeletonProps {
    className?: string
}

export const ProductListSkeleton: FC<IProductListSkeletonProps> = (props) => {
    const { className } = props

    return (
        <CreateArrayAndFill
            childrenClassName={s['skeleton-item']}
            amount={12}>
            <ProductCardSkeleton />
        </CreateArrayAndFill>
    )
}

ProductListSkeleton.displayName = 'ProductListSkeleton'
