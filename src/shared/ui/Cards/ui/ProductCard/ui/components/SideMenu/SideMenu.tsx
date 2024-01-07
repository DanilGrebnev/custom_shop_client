import { FC } from 'react'
import WishlistIcon from '/public/static/icons/wishlist.svg'
import EyeIcon from '/public/static/icons/eye-icon.svg'
import LayerIcon from '/public/static/icons/layer-icon.svg'
import clsx from 'clsx'

import s from './SideMenu.module.scss'

interface ISideMenuProps {
    className?: string
}

export const SideMenu: FC<ISideMenuProps> = (props) => {
    const { className } = props

    return (
        <div className={clsx(s.menu, className)}>
            <div className={s['menu-item']}>
                <WishlistIcon />
            </div>
            <div className={s['menu-item']}>
                <LayerIcon stroke="black" />
            </div>
            <div className={s['menu-item']}>
                <EyeIcon />
            </div>
        </div>
    )
}
