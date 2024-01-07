import { FC, ReactNode, Suspense } from 'react'
import {
    SliderSkeleton,
    SliderSkeletonWithContainer,
} from '@/shared/ui/Skeletons'

interface IWithSuspense {
    children?: ReactNode
    fallbackVariant?: '1' | '2'
    className?: string
}

export const WithSuspense: FC<IWithSuspense> = (props) => {
    const { children, fallbackVariant = '1' } = props

    const fallback =
        fallbackVariant === '1' ? (
            <SliderSkeleton />
        ) : (
            <SliderSkeletonWithContainer />
        )

    return <Suspense fallback={fallback}>{children}</Suspense>
}
