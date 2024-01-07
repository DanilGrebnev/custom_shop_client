import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'
import { SliderSkeleton } from '../..'
import { Skeleton } from '@mui/material'

import clsx from 'clsx'
import s from './HomePageSkeleton.module.scss'

export const HomePageSkeleton = () => {
    return (
        <>
            <div className={clsx('contain', s['main-slider-skeleton'])}>
                <Skeleton
                    variant="rounded"
                    sx={{ width: '100%', height: '100%' }}
                />
            </div>
            <CreateArrayAndFill amount={3}>
                <SliderSkeleton />
            </CreateArrayAndFill>
        </>
    )
}

HomePageSkeleton.displayName = 'HomePageSkeleton'
