'use client'

import { useSwiper } from 'swiper/react'
import { TSliderTheme } from '@/app/types/slider'

import ArrowIcon from '/public/static/icons/arrow.svg'
import clsx from 'clsx'

import s from './SliderButton.module.scss'

interface IProps {
    next?: boolean
    prev?: boolean
    className?: string
    theme: TSliderTheme
}

export const SliderButton = (props: IProps) => {
    const { next, prev, theme, className } = props
    const swiper = useSwiper()

    const switchSlide = () => {
        if (next) return swiper.slideNext()
        if (prev) return swiper.slidePrev()
    }

    return (
        <button
            title="slider-button"
            type="button"
            onClick={switchSlide}
            className={clsx(s.btn, s[theme], className)}>
            <ArrowIcon
                fill="white"
                className={s.icon}
            />
        </button>
    )
}
