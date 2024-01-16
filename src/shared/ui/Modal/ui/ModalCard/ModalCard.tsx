import { FC, ReactNode } from 'react'

import s from './ModalCard.module.scss'
import clsx from 'clsx'

interface IModalCardProps {
    children?: ReactNode
    className?: string
    center?: boolean
}

export const ModalCard: FC<IModalCardProps> = (props) => {
    const { children, className, center } = props

    return (
        <div className={clsx(s.modalCard, className, { [s.center]: center })}>
            {children}
        </div>
    )
}
