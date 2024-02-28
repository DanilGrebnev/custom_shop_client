import { type CSSProperties, type ReactNode } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

export enum SliderTheme {
    theme1 = 'theme1',
    theme2 = 'theme2',
}

export type TSliderTheme = keyof typeof SliderTheme

type TSliderBreakpoints = Record<
    string | number,
    {
        slidesPerView?: number
        spaceBetween?: number
    }
>

export interface ISliderProps {
    children?: ReactNode[]
    spaceBetween?: number
    slidesPerView?: number | 'auto'
    className?: string
    autoplay?: boolean
    loop?: boolean
    style?: CSSProperties
    theme?: TSliderTheme
    buttons?: boolean
    breakpoints?:
        | TSliderBreakpoints
        | 'default'
        | 'feedback-slider'
        | 'category-slider'
}
