'use client'

import { useActionCreators } from '@/shared/hooks/useActionCreators'
import { FilterButton } from '@/shared/ui/Buttons/ui/FilterButton'

import { useCheckedActiveFilters } from '../../model/hooks/useCheckedActiveFilters'
import { productActions } from '../../model/slice/productSlice'
import s from './ActiveFilterListMobile.module.scss'

import { ActiveFilterButton } from '@/widget/ActiveFilterButton'
import clsx from 'clsx'
import { v4 } from 'uuid'

interface IProps {
    className?: string
}

export const ActiveFilterListMobile = ({ className }: IProps) => {
    const activeFilters = useCheckedActiveFilters()
    const actions = useActionCreators(productActions)

    return (
        <div
            className={clsx(
                s.container,
                { [s.hidden]: !activeFilters.length },
                className
            )}>
            <header className={s['header-filter-list']}>
                <h3 className={s.title}>Выбранные фильтры</h3>
                <FilterButton
                    withIcon={false}
                    onClick={() => actions.resetAllFilters()}
                    className={s['reset-filters-btn']}
                    label="Очистить фильтры">
                    Очистить фильтры
                </FilterButton>
            </header>

            <ul className={s['filter-list']}>
                {activeFilters.length
                    ? activeFilters.map((filter) => {
                          return (
                              <li
                                  key={v4()}
                                  className={s.filter}>
                                  <ActiveFilterButton
                                      id={filter?.id}
                                      label={filter?.label}
                                      className={s['filter-item']}
                                  />
                              </li>
                          )
                      })
                    : null}
            </ul>
        </div>
    )
}
