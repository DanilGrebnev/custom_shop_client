import { FC, ReactNode } from 'react'

import s from './ModalBackgroundFilter.module.scss'
import clsx from 'clsx'

interface IModalBackgroundFilterProps {
    children?: ReactNode
    className?: string
}

export const ModalBackgroundFilter: FC<IModalBackgroundFilterProps> = (
    props
) => {
    const { children, className } = props

    return (
        <div className={clsx(s.ModalBackgroundFilter, className)}>
            {children}
        </div>
    )
}
