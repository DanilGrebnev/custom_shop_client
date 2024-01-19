import { type FC } from 'react'
import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'
import { ProductCardSkeleton } from '../../ProductCardSkeleton/ProductCardSkeleton'

import s from './ProductListSkeleton.module.scss'

interface IProductListSkeletonProps {
    className?: string
    wrapper?: boolean
}

export const ProductListSkeleton: FC<IProductListSkeletonProps> = (props) => {
    const { wrapper } = props
    if (wrapper) {
        return (
            <div className={s.wrapper}>
                <CreateArrayAndFill
                    childrenClassName={s['skeleton-item']}
                    amount={12}>
                    <ProductCardSkeleton />
                </CreateArrayAndFill>
            </div>
        )
    }

    return (
        <CreateArrayAndFill
            childrenClassName={s['skeleton-item']}
            amount={12}>
            <ProductCardSkeleton />
        </CreateArrayAndFill>
    )
}

ProductListSkeleton.displayName = 'ProductListSkeleton'
