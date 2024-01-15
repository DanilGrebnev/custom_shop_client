import { FC, ReactNode } from 'react'
import ArrowIcons from '/public/static/icons/arrow.svg'

import s from './MenuItem.module.scss'

interface MenuItemProps {
    children: ReactNode
}

export const MenuItem: FC<MenuItemProps> = (props) => {
    const { children } = props

    return (
        <div className={s.MenuItem}>
            <ArrowIcons className={s.icon} />
            <p className={s.text}>{children}</p>
        </div>
    )
}
