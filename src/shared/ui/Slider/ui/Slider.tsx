'use client'

import { FC } from 'react'

import { SliderButton } from '@/shared/ui/SliderButton'

import { ISliderProps, SliderTheme } from '@/app/types/slider'

import { changeBreakPoints } from '../lib'
import s from './Slider.module.scss'

import clsx from 'clsx'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Slider: FC<ISliderProps> = (props) => {
    const {
        children = [],
        slidesPerView,
        className,
        theme = SliderTheme.theme1,
        breakpoints,
        buttons = true,
        loop = true,
        ...otherProps
    } = props

    return (
        <Swiper
            {...otherProps}
            loop={loop}
            spaceBetween={15}
            breakpoints={changeBreakPoints(breakpoints)}
            className={clsx(s.swiper, className)}
            slidesPerView={slidesPerView}>
            {children.map((item, i) => {
                return (
                    <SwiperSlide
                        key={i}
                        className={s.slide}>
                        {item}
                    </SwiperSlide>
                )
            })}
            {buttons ? (
                <>
                    <SliderButton
                        className={s['btn-prev']}
                        prev
                        theme={theme}
                    />

                    <SliderButton
                        className={s['btn-next']}
                        next
                        theme={theme}
                    />
                </>
            ) : null}
        </Swiper>
    )
}
