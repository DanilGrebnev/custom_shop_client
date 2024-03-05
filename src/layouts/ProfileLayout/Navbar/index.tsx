import OrderIcon from '@/shared/assets/orders-icon.svg'
import ProfileIcon from '@/shared/assets/profile-icon.svg'
import WishListIcon from '@/shared/assets/wishlist.svg'
import { Papper } from '@/shared/ui/Papper'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import { NavBarItem } from '../NavBarItem'
import s from './s.module.scss'

const itemsList = [
    {
        href: NavigationRoutes.profileOrders,
        icon: <OrderIcon />,
        label: 'Заказы',
    },
    {
        href: NavigationRoutes.wishlist,
        icon: <WishListIcon />,
        label: 'Избранное',
    },
    {
        href: NavigationRoutes.profileMe,
        icon: <ProfileIcon />,
        label: 'Профиль',
    },
]

export const NavBar = () => {
    return (
        <Papper className={s.navbar}>
            <ul>
                {itemsList.map((item) => (
                    <NavBarItem
                        key={item.label}
                        {...item}
                    />
                ))}
            </ul>
        </Papper>
    )
}
