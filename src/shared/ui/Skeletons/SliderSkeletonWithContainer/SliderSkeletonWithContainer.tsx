'use client'
import { FC } from 'react'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer'
import { SliderSkeleton } from '@/shared/ui/Skeletons/SliderSkeleton/SliderSkeleton'

interface ISliderSkeletonWithContainerProps {
    className?: string
}

export const SliderSkeletonWithContainer: FC<
    ISliderSkeletonWithContainerProps
> = (props) => {
    return (
        <FullWidthContainer className={props.className}>
            <SliderSkeleton />
        </FullWidthContainer>
    )
}
