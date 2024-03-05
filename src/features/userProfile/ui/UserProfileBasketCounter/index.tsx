import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import { UserProfileCounterItem } from '../UserProfileCounterItem/UserProfileCounterItem'
import CartIcon from '/public/static/icons/cart.svg'

interface IUserProfileBasketCounter {
    count?: number
    onMouseLeave?: () => void
    onMouseEnter?: () => void
    onClick?: () => void
}

export const UserProfileBasketCounter = (props: IUserProfileBasketCounter) => {
    const { count, onMouseEnter, onMouseLeave, onClick } = props

    return (
        <UserProfileCounterItem
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            icon={<CartIcon />}
            count={count}
            label="Корзина"
            href={NavigationRoutes.basket}
        />
    )
}
