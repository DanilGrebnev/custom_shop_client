'use client'

import { FC, CSSProperties } from 'react'
import { Skeleton } from '@mui/material'
import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton'
import { ContainerWithTitle } from '../../Containers/ContainerWithTitle'
import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'

import clsx from 'clsx'
import s from './SliderSkeleton.module.scss'
import './SliderSkeletonMedia.scss'

interface IindexProps {
    className?: string
    amountSkeletons?: number
    style?: CSSProperties
}

export const SliderSkeleton: FC<IindexProps> = (props) => {
    const { className, amountSkeletons = 7, style } = props

    return (
        <div
            style={style}
            className={clsx(s['wrapper'], className)}>
            <ContainerWithTitle
                title={
                    <Skeleton
                        width={220}
                        height={40}
                        variant="text"
                        animation="wave"
                    />
                }>
                <div className={s['slider-skeleton__wrapper']}>
                    <CreateArrayAndFill
                        amount={amountSkeletons}
                        childrenClassName={'slider-skeleton__item'}>
                        <ProductCardSkeleton />
                    </CreateArrayAndFill>
                </div>
            </ContainerWithTitle>
        </div>
    )
}

export default SliderSkeleton
