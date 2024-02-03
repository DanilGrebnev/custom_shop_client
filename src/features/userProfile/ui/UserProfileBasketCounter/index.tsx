import { UserProfileCounterItem } from '../UserProfileCounterItem'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import CartIcon from '/public/static/icons/cart.svg'

export const UserProfileBasketCounter = () => {
    return (
        <UserProfileCounterItem
            icon={<CartIcon />}
            count={0}
            href={NavigationRoutes.basket()}
        />
    )
}
