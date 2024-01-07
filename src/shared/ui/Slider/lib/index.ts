import { ISliderProps } from '@/app/types/slider'

const defaultBreakpoints = {
    250: {
        slidesPerView: 1,
    },
    350: {
        slidesPerView: 2,
    },
    640: {
        slidesPerView: 3,
    },
    980: {
        slidesPerView: 5,
    },
    1250: {
        slidesPerView: 7,
    },
}

const feedBackSliderBreakpoints = {
    200: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    800: {
        slidesPerView: 3,
    },
    1250: {
        slidesPerView: 4,
    },
}

const caegotySliderBreakpoint = {
    200: {
        slidesPerView: 1,
    },
    300: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    640: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    980: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    1200: {
        slidesPerView: 7,
        spaceBetween: 20,
    },
}

export const changeBreakPoints = (breakpoints: ISliderProps['breakpoints']) => {
    switch (breakpoints) {
        case 'default':
            return defaultBreakpoints
        case 'feedback-slider':
            return feedBackSliderBreakpoints
        case 'category-slider':
            return caegotySliderBreakpoint
        default:
            return undefined
    }
}
