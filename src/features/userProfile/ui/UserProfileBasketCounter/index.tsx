import { UserProfileCounterItem } from '../UserProfileCounterItem/UserProfileCounterItem'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import CartIcon from '/public/static/icons/cart.svg'

interface IUserProfileBasketCounter {
    count?: number
    onMouseLeave?: () => void
    onMouseEnter?: () => void
}

export const UserProfileBasketCounter = (props: IUserProfileBasketCounter) => {
    const { count, onMouseEnter, onMouseLeave } = props

    return (
        <UserProfileCounterItem
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            icon={<CartIcon />}
            count={count}
            label="Корзина"
            href={NavigationRoutes.basket()}
        />
    )
}
