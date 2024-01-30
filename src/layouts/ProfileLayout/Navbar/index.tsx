import { NavBarItem } from '../NavBarItem'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import OrderIcon from '@/shared/assets/orders-icon.svg'
import ProfileIcon from '@/shared/assets/profile-icon.svg'
import { Papper } from '@/shared/ui/Papper'
import WishListIcon from '@/shared/assets/wishlist.svg'

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
    {
        href: NavigationRoutes.wishlist(),
        icon: <WishListIcon />,
        text: 'Избранное',
    },
]

export const NavBar = () => {
    return (
        <Papper className={s.navbar}>
            <ul>
                {itemsList.map((item) => (
                    <NavBarItem
                        key={item.text}
                        {...item}
                    />
                ))}
            </ul>
        </Papper>
    )
}
