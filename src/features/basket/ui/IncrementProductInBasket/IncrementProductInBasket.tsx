import { AmountAdded } from '@/shared/ui/AmountAdded'

export const IncrementProductInBasket = () => {
    const increment = () => {}
    const decrement = () => {}

    return (
        <AmountAdded
            value={0}
            decrement={decrement}
            increment={increment}
        />
    )
}
