import { type FC } from 'react'
import { Skeleton } from '@mui/material'
import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'

import clsx from 'clsx'
import s from './FilterSideBarSkeleton.module.scss'

interface IFilterSideBarSkeletonProps {
    className?: string
}

export const FilterSideBarSkeleton: FC<IFilterSideBarSkeletonProps> = (
    props
) => {
    const { className } = props

    return (
        <div className={clsx(s.FilterSideBarSkeleton, className)}>
            <CreateArrayAndFill amount={2}>
                <div className={s.item}>
                    <Skeleton
                        sx={{ height: '25px' }}
                        className={s.title}
                        animation="wave"
                    />
                    <CreateArrayAndFill amount={10}>
                        <Skeleton animation="wave" />
                    </CreateArrayAndFill>
                </div>
            </CreateArrayAndFill>
        </div>
    )
}

FilterSideBarSkeleton.displayName = 'FilterSideBarSkeleton'
