import { UserProfileCounterItem } from '../UserProfileCounterItem/UserProfileCounterItem'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import CartIcon from '/public/static/icons/cart.svg'

export const UserProfileBasketCounter = () => {
    return (
        <UserProfileCounterItem
            icon={<CartIcon />}
            count={0}
            label="Корзина"
            href={NavigationRoutes.basket()}
        />
    )
}
