import { memo, useMemo } from 'react'

import { useAppSelector } from '@/shared/hooks'

import { ProductSelectors } from '../../model/selectors/productSelectors'
import s from './ActiveFilterList.module.scss'

import { ActiveFilterButton } from '@/widget/ActiveFilterButton'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 } from 'uuid'

export const ActiveFilterList = memo(() => {
    const filters = useAppSelector(ProductSelectors.getAllFilters)

    const activeFilters = useMemo(
        () =>
            filters.filter((filter) => {
                // return isTypeCheckedFilter(filter) && Boolean(filter.checked)
            }),
        [filters]
    )

    return (
        <Swiper
            className={s.swiper}
            slidesPerView="auto"
            spaceBetween={20}
            mousewheel={true}>
            {/* {activeFilters.map((filter) => {
                if (!isTypeCheckedFilter(filter)) return
                return (
                    <SwiperSlide
                        key={v4()}
                        className={s['swiper-slide']}>
                        <ActiveFilterButton
                            key={v4()}
                            id={filter.id}
                            label={filter.label}
                        />
                    </SwiperSlide>
                )
            })} */}
        </Swiper>
    )
})

ActiveFilterList.displayName = 'ActiveFilterList'
