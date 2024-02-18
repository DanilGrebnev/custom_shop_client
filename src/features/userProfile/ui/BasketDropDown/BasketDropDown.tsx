import { Papper } from '@/shared/ui/Papper'
import { Button } from '@/shared/ui/Button'
import { useGetCartQuery } from '@/features/basket'
import { ComponentPropsWithRef, ReactNode } from 'react'
import { BasketDropDownItem } from '../BasketDropDownItem/BasketDropDownItem'

import s from './BasketDropDown.module.scss'

interface IBasketDropDown {
    count?: number
    list?: ReactNode
    onMouseLeave: () => void
}

export const BasketDropDown = (props: IBasketDropDown) => {
    const { count, list, onMouseLeave } = props
    const { data } = useGetCartQuery()

    return (
        <Papper
            className={s['dropdown-widget']}
            onMouseLeave={onMouseLeave}>
            <main>
                <header>
                    <b>Основные товары: {count}</b>
                    <button>Очистить список</button>
                </header>
                <div className={s.list}>{list}</div>
            </main>
            <footer>
                <div className={s.total}>
                    <p>Итого:</p>
                    <b>9 999</b>
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
