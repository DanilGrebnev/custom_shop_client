'use client'

import { FC, CSSProperties } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { LargeSliderCard } from '@/shared/ui/Cards'
import { IImage } from '@/app/types/product'
// import data from '@/mock/mock'

import clsx from 'clsx'
import s from './TopSlider.module.scss'

interface ITopSliderProps {
    sliderImages: IImage[]
    style?: CSSProperties
}

export const TopSlider: FC<ITopSliderProps> = (props) => {
    const { sliderImages, style } = props

    return (
        <div
            style={style}
            className={clsx(s.TopSlider, 'contain')}>
            <Slider
                spaceBetween={20}
                slidesPerView={1}
                theme="theme1">
                {sliderImages?.map(({ image }, i) => {
                    return (
                        <LargeSliderCard
                            className={s.card}
                            src={image}
                            key={i}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}
