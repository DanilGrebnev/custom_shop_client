import { FC } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { LargeSliderCard } from '@/shared/ui/Cards'
import { IImage } from '@/app/types/Product'
import data from '@/mock/mock'

import clsx from 'clsx'
import s from './TopSlider.module.scss'

interface ITopSliderProps {
    className?: string
    sliderImages: IImage[]
}

export const TopSlider: FC<ITopSliderProps> = async (props) => {
    const { className, sliderImages } = props

    return (
        <div className={clsx(s.TopSlider, 'contain', className)}>
            <Slider
                spaceBetween={20}
                slidesPerView={1}
                theme="theme1">
                {sliderImages?.map(({ image }, i) => {
                    return (
                        <LargeSliderCard
                            src={image}
                            key={i}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}
