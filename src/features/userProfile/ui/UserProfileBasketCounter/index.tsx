import { UserProfileCounterItem } from '../UserProfileCounterItem/UserProfileCounterItem'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { useGetCartQuery } from '@/features/basket'
import CartIcon from '/public/static/icons/cart.svg'

export const UserProfileBasketCounter = () => {
    const { data } = useGetCartQuery()

    return (
        <UserProfileCounterItem
            dropDown={true}
            icon={<CartIcon />}
            count={data?.length}
            label="Корзина"
            href={NavigationRoutes.basket()}
        />
    )
}
