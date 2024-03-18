import { AmountAdded } from '@/shared/ui/AmountAdded'

import {
    useGetCartQuery,
    useToggleItemAmountInBasketMutation,
} from '../../model/api/basketApi'

interface Props {
    cartItemId?: number
    currentItemAmount?: number
    itemAmountInBasket?: number
}

export const ToggleAmountItemInBasket = (props: Props) => {
    const { cartItemId = 0, currentItemAmount, itemAmountInBasket = 0 } = props

    const { isFetching } = useGetCartQuery()

    const [toggleItemAmount, { isLoading }] =
        useToggleItemAmountInBasketMutation()

    const loading = isFetching || isLoading

    const disabled1 = currentItemAmount === itemAmountInBasket
    const disabled2 = itemAmountInBasket === 1

    const increment = () => {
        toggleItemAmount({
            id: cartItemId,
            quantity: itemAmountInBasket + 1,
        })
    }

    const decrement = () => {
        toggleItemAmount({
            id: cartItemId,
            quantity: itemAmountInBasket - 1,
        })
    }

    return (
        <AmountAdded
            disabled1={loading || disabled1}
            disabled2={loading || disabled2}
            value={itemAmountInBasket}
            increment={increment}
            decrement={decrement}
        />
    )
}
