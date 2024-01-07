import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import s from './CardWrapper.module.scss'

interface ICardWrapperProps {
    className?: string
    children?: ReactNode | ReactNode[]
    width?: 'default' | 'max-content' | 'full'
}

export const CardWrapper: FC<ICardWrapperProps> = (props) => {
    const { className, width = 'default', children } = props

    return (
        <div className={clsx(s.CardWrapper, s[width], className)}>
            {children}
        </div>
    )
}
