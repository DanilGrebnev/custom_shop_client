import { UserProfileCounterItem } from '../UserProfileCounterItem'
import CartIcon from '/public/static/icons/cart.svg'

export const UserProfileBasketCounter = () => {
    return (
        <UserProfileCounterItem
            icon={<CartIcon />}
            count={0}
        />
    )
}
