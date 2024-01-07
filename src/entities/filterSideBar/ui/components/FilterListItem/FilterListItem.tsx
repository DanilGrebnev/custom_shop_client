import { type FC, memo } from 'react'
import { type IFilterItem } from '@/app/types/filters'
import { v4 } from 'uuid'
import {
    ChoicesItemCheckBox,
    ChoicesItemColorCheckBox,
    ChoicesItemRatingCheckBox,
} from './ChoicesItem/ChoicesItem'

import clsx from 'clsx'
import s from './FilterListItem.module.scss'

interface IFilterListItemProps {
    className?: string
    filterItem: IFilterItem
}

export const FilterListItem: FC<IFilterListItemProps> = memo((props) => {
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
                    const code = filterItem.code

                    return (
                        <li key={v4()}>
                            {code === 'color' ? (
                                <ChoicesItemColorCheckBox
                                    code={code}
                                    choicesItem={choicesItem}
                                />
                            ) : code === 'rating' ? (
                                <ChoicesItemRatingCheckBox
                                    code={code}
                                    choicesItem={choicesItem}
                                />
                            ) : (
                                <ChoicesItemCheckBox
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
})

FilterListItem.displayName = 'FilterListItem'
