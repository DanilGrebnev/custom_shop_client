import { type FC, memo } from 'react'
import { type IFilterItem } from '@/app/types/filters'
import { v4 } from 'uuid'
import {
    FilterCheckBox,
    FilterColorCheckBox,
    FilterRatingCheckBox,
} from './ChoicesItem/ChoicesItem'

import clsx from 'clsx'
import s from './FilterListItem.module.scss'

interface IFilterListItemProps {
    className?: string
    filterItem: IFilterItem
}

export const FilterListItem: FC<IFilterListItemProps> = (props) => {
    const { className, filterItem } = props

    return (
        <div
            id={'Filter-Sidebar__' + filterItem.code}
            className={clsx(s.FilterListItem, className)}>
            <h2>{filterItem.label}</h2>
            <ul
                className={clsx(s['filter-list'], {
                    [s['color-filter']]: filterItem.code === 'color',
                })}>
                {filterItem?.choices?.map((choicesItem) => {
                    const { code } = filterItem

                    return (
                        <li key={v4()}>
                            {code === 'color' ? (
                                <FilterColorCheckBox
                                    code={code}
                                    choicesItem={choicesItem}
                                />
                            ) : code === 'rating' ? (
                                <FilterRatingCheckBox
                                    code={code}
                                    choicesItem={choicesItem}
                                />
                            ) : (
                                <FilterCheckBox
                                    code={code}
                                    choicesItem={choicesItem}
                                />
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
