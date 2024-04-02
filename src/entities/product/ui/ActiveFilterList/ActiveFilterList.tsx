import { memo, useMemo } from 'react'

import { useAppSelector } from '@/shared/hooks'

import { ProductSelectors } from '../../model/selectors/productSelectors'
import s from './ActiveFilterList.module.scss'

import { ActiveFilterButton } from '@/widget/ActiveFilterButton'
import clsx from 'clsx'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
    className?: string
}

export const ActiveFilterList = memo((props: Props) => {
    const { className } = props
    const activeFilters = useAppSelector(ProductSelectors.getActiveFilters)

    return (
        <Swiper
            className={clsx(s.swiper, className)}
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
                            id={filter.id}
                            label={filter.label}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
})

export const ActiveFilterListMobile = (props: Props) => {
    const activeFilters = useAppSelector(ProductSelectors.getActiveFilters)

    return (
        <>
            {activeFilters.map(({ slug, id, label }) => {
                return (
                    <ActiveFilterButton
                        slug={slug}
                        key={id}
                        id={id}
                        label={label}
                    />
                )
            })}
        </>
    )
}

ActiveFilterList.displayName = 'ActiveFilterList'
