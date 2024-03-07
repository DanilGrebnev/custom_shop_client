import { memo, useMemo } from 'react'

import CrossIcon from '@/shared/assets/cross.svg'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'

import { useToggleTheme } from '@/app/providers/ThemeProvider'

import { isTypeCheckedFilter } from '../../model/lib/isTypeCheckedFilter'
import { ProductSelectors } from '../../model/selectors/productSelectors'
import { productActions } from '../../model/slice/productSlice'
import { ICheckedFilters } from '../../model/types/productListTypes'
import s from './ActiveFilterList.module.scss'

import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 } from 'uuid'

export const ActiveFilterList = memo(() => {
    const { theme } = useToggleTheme()
    const filters = useAppSelector(ProductSelectors.getAllFilters)

    const dispatch = useAppDispatch()

    const activeFilters = useMemo(
        () =>
            filters.filter((filter) => {
                return isTypeCheckedFilter(filter) && Boolean(filter.checked)
            }),
        [filters]
    )

    const deleteFilter = (id: string) => {
        dispatch(productActions.changeCheckedValue({ id, checked: false }))
    }

    return (
        <Swiper
            className={s.swiper}
            slidesPerView="auto"
            spaceBetween={20}
            mousewheel={true}>
            {activeFilters.map((filter) => {
                if (!isTypeCheckedFilter(filter)) return
                return (
                    <SwiperSlide
                        key={v4()}
                        className={s['swiper-slide']}>
                        <button
                            key={v4()}
                            title={`Удалить фильтр ${filter.label}`}
                            onClick={deleteFilter.bind(null, filter.id)}
                            className={clsx(s.filter, s[theme])}>
                            <span className={s.description}>
                                {filter.label}
                            </span>

                            <div className={s['cross-wrapper']}>
                                <CrossIcon className={s['cross-icon']} />
                            </div>
                        </button>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
})

ActiveFilterList.displayName = 'ActiveFilterList'
