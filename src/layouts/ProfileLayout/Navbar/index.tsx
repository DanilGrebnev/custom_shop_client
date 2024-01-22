import { NavBarItem } from '../NavBarItem'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import OrderIcon from '@/shared/assets/orders-icon.svg'
import ProfileIcon from '@/shared/assets/profile-icon.svg'

import s from './s.module.scss'

const itemsList = [
    {
        href: NavigationRoutes.profileMe(),
        icon: <ProfileIcon />,
        text: 'Профиль',
    },
    {
        href: NavigationRoutes.profileOrders(),
        icon: <OrderIcon />,
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
