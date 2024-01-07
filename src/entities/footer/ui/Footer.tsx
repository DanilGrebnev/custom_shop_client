import { type FC } from 'react'

import clsx from 'clsx'
import s from './Footer.module.scss'

interface IFooterProps {
    className?: string
}

export const Footer: FC<IFooterProps> = (props) => {
    const { className } = props

    return <div className={clsx(s.Footer, className)}></div>
}

Footer.displayName = 'Footer'
