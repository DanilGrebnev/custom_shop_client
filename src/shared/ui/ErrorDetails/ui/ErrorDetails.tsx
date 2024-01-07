import { ReactNode, type FC, CSSProperties } from 'react'

import clsx from 'clsx'
import s from './ErrorDetails.module.scss'

interface IErrorDetailsProps {
    className?: string
    children?: ReactNode
    style?: CSSProperties
}

export const ErrorDetails: FC<IErrorDetailsProps> = (props) => {
    const { className, style, children } = props

    return (
        <details
            style={style}
            className={clsx(s.details, className)}>
            <summary>Open for more details</summary>
            <div className={s['details_content']}>
                <code>{children}</code>
            </div>
        </details>
    )
}

ErrorDetails.displayName = 'ErrorDetails'
