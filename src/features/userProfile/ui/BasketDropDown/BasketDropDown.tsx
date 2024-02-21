import { Papper } from '@/shared/ui/Papper'
import { Button } from '@/shared/ui/Button'
import { useMemo, type ReactNode } from 'react'
import { useGetCartQuery } from '@/features/basket'

import s from './BasketDropDown.module.scss'

interface IBasketDropDown {
    count?: number
    list?: ReactNode
    onMouseLeave: () => void
}

export const BasketDropDown = (props: IBasketDropDown) => {
    const { count, list, onMouseLeave } = props
    const { data } = useGetCartQuery()

    const price = useMemo(() => {
        return data?.reduce((totalPrice, curr) => {
            totalPrice += curr.price
            return totalPrice
        }, 0)
    }, [data])

    return (
        <Papper
            className={s['dropdown-widget']}
            onMouseLeave={onMouseLeave}>
            <header className={s.header}>
                <b>Основные товары: {count}</b>
                <button>Очистить список</button>
            </header>

            <main className={s.list}>{list}</main>

            <footer className={s.footer}>
                <div className={s.total}>
                    <p>Итого:</p>
                    <b>{price}</b>
                </div>
                <div className={s['btn-group']}>
                    <Button
                        hover={true}
                        variant="outlined">
                        Оформить заказ
                    </Button>
                    <Button hover={true}>В корзину</Button>
                </div>
            </footer>
        </Papper>
    )
}
