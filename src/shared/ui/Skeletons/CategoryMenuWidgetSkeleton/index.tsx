import { Skeleton } from '@mui/material'
import s from './s.module.scss'

export const CategoryMenuWidgetSkeleton = () => {
    return (
        <Skeleton
            className={s.skeleton}
            variant="rectangular"
            animation="wave"
            width={240}
            height={48}
        />
    )
}
