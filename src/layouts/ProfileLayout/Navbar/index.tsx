import { NavBarItem } from '../NavBarItem'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { Papper } from '@/shared/ui/Papper'
import OrderIcon from '@/shared/assets/orders-icon.svg'
import ProfileIcon from '@/shared/assets/profile-icon.svg'
import WishListIcon from '@/shared/assets/wishlist.svg'
import BasketIcon from '@/shared/assets/basket.svg'

import s from './s.module.scss'

const itemsList = [
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
    {
        href: NavigationRoutes.profileMe(),
        icon: <ProfileIcon />,
        text: 'Профиль',
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
