import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

import s from './FullWidthContainer.module.scss'

interface IFullWidthContainerProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string
    children?: ReactNode
}

export const FullWidthContainer: FC<IFullWidthContainerProps> = (props) => {
    const { className, children, ...other } = props

    return (
        <div
            {...other}
            className={clsx(s.FullWidthContainer, className)}>
            {children}
        </div>
    )
}
