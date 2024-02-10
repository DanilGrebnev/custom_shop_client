import { ReactNode } from 'react'
import s from './FilterGroup.module.scss'

interface IFilterGroupProps {
    title: string
    children: ReactNode
}

export const FilterGroup = (props: IFilterGroupProps) => {
    const { title, children } = props
    return (
        <div className={s.FilterGroupContainer}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
