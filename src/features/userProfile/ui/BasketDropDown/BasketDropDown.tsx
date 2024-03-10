import { type ReactNode, useMemo } from 'react'

import Link from 'next/link'

import { useGetCartQuery } from '@/features/basket'

import { Button } from '@/shared/ui/Button'
import { Papper } from '@/shared/ui/Papper'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

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
            <header className={s.header}>
                <b>Основные товары: {count}</b>
                <button>Очистить список</button>
            </header>

            <main className={s.list}>{list}</main>

            <footer className={s.footer}>
                <div className={s.total}>
                    <p>Итого:</p>
                    <b>{data?.totalPrice}</b>
                </div>
                <div className={s['btn-group']}>
                    <Button
                        hover={true}
                        variant="outlined">
                        Оформить заказ
                    </Button>
                    <Link href={NavigationRoutes.basket}>
                        <Button hover={true}>В корзину</Button>
                    </Link>
                </div>
            </footer>
        </Papper>
    )
}
