import { ReactNode } from 'react'

import s from './FilterGroup.module.scss'

import clsx from 'clsx'

interface IFilterGroupProps {
    title: string
    children: ReactNode
    type?: 'color' | string
}

export const FilterGroup = (props: IFilterGroupProps) => {
    const { title, children, type } = props

    const isColor = clsx({ [s.color]: type === 'color' })

    return (
        <div className={s.FilterGroupContainer}>
            <h2>{title}</h2>
            <div className={clsx(isColor)}>{children}</div>
        </div>
    )
}
