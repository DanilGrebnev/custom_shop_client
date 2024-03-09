'use client'

import { useCheckedActiveFilters } from '../../model/hooks/useCheckedActiveFilters'
import s from './ActiveFilterListMobile.module.scss'

import { ActiveFilterButton } from '@/widget/ActiveFilterButton'
import clsx from 'clsx'
import { v4 } from 'uuid'

interface IProps {
    className?: string
}

export const ActiveFilterListMobile = ({ className }: IProps) => {
    const activeFilters = useCheckedActiveFilters()

    return (
        <div className={clsx(s['filter-list'], className)}>
            {activeFilters.map((filter) => {
                return (
                    <ActiveFilterButton
                        key={v4()}
                        className={s.filter}
                        id={filter?.id}
                        label={filter?.label}
                    />
                )
            })}
        </div>
    )
}
