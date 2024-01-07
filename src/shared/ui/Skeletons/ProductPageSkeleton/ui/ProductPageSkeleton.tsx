import { CircularProgress } from '@mui/material'

import clsx from 'clsx'
import s from './ProductPageSkeleton.module.scss'

export const ProductPageSkeleton = () => {
    return (
        <div className={clsx(s.ProductPageSkeleton, 'contain')}>
            <CircularProgress
                size={150}
                className={s.circular}
            />
        </div>
    )
}

ProductPageSkeleton.displayName = 'ProductPageSkeleton'
