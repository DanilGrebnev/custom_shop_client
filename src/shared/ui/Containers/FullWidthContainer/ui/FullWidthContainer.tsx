import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import s from './FullWidthContainer.module.scss'

interface IFullWidthContainerProps {
    className?: string
    children?: ReactNode
}

export const FullWidthContainer: FC<IFullWidthContainerProps> = (props) => {
    const { className, children } = props

    return (
        <div className={clsx(s.FullWidthContainer, className)}>{children}</div>
    )
}
