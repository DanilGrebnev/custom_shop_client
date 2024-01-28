import { ChangeEvent, FC, MouseEventHandler, ReactNode } from 'react'
import clsx from 'clsx'
import s from './CardWrapper.module.scss'

interface ICardWrapperProps {
    className?: string
    children?: ReactNode | ReactNode[]
    width?: 'default' | 'max-content' | 'full'
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const CardWrapper: FC<ICardWrapperProps> = (props) => {
    const { onClick, className, width = 'default', children } = props

    return (
        <div
            onClick={onClick}
            className={clsx(s.CardWrapper, s[width], className)}>
            {children}
        </div>
    )
}
