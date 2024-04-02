import { memo, useMemo } from 'react'

import { useAppSelector } from '@/shared/hooks'

import { ProductSelectors } from '../../model/selectors/productSelectors'
import s from './ActiveFilterList.module.scss'

import { ActiveFilterButton } from '@/widget/ActiveFilterButton'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ActiveFilterList = memo(() => {
    const activeFilters = useAppSelector(ProductSelectors.getActiveFilters)

    console.log(activeFilters)

    return (
        <Swiper
            className={s.swiper}
            slidesPerView="auto"
            spaceBetween={20}
            mousewheel={true}>
            {activeFilters.map((filter) => {
                return (
                    <SwiperSlide
                        key={filter.id}
                        className={s['swiper-slide']}>
                        <ActiveFilterButton
                            slug={filter.slug}
                            key={filter.id}
                            id={filter?.id as string}
                            label={filter.label}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
})

ActiveFilterList.displayName = 'ActiveFilterList'
