import { NavBarItem } from '../NavBarItem'

import SettingIcon from '@/shared/assets/setting-icon.svg'
import ProfileIcon from '@/shared/assets/profile-icon.svg'
import s from './s.module.scss'

const itemsList = [
    {
        href: '/profile/me',
        icon: <ProfileIcon />,
        text: 'Профиль',
    },
    {
        href: '/profile/setting',
        icon: <SettingIcon />,
        text: 'Настройки',
    },
    {
        href: '/profile/orders',
        icon: '',
        text: 'Заказы',
    },
]

export const NavBar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                {itemsList.map((item) => (
                    <NavBarItem
                        key={item.text}
                        {...item}
                    />
                ))}
            </ul>
        </div>
    )
}
