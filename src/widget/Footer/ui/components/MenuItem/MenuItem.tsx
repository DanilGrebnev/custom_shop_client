import { FC, ReactNode } from 'react'
import ArrowIcons from '/public/static/icons/arrow.svg'
import clsx from 'clsx'
import s from './MenuItem.module.scss'

interface MenuItemProps {
    className?: string
    children: ReactNode
}

export const MenuItem: FC<MenuItemProps> = (props) => {
    const { children, className } = props

    return (
        <li className={clsx(s.MenuItem, className)}>
            <label className={s.content}>
                <ArrowIcons className={s.icon} />
                <p className={s.text}>{children}</p>
            </label>
        </li>
    )
}
