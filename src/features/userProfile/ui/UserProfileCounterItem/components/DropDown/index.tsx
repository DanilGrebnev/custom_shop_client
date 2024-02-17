'use client'

import { Papper } from '@/shared/ui/Papper'
import { Button } from '@/shared/ui/Button'
import { DropDownItem } from '../DropDownItem/DropDownItem'

import { useGetCartQuery } from '@/features/basket'
import { IProduct } from '@/app/types/product'
import { useEffect, useState } from 'react'
import { $axios } from '@/app/API'
import s from './s.module.scss'

interface IDropDown {
    amount: number
    openModal: (open: boolean) => void
}

export const DropDown = (props: IDropDown) => {
    const { openModal, amount } = props
    const [productsData, setProducts] = useState<IProduct[] | undefined>()
    const { data } = useGetCartQuery()

    const fetchProducts = async () => {
        if (!data) return
        const promises = data?.map((cartItem) =>
            $axios.get<IProduct>('product/' + cartItem.id)
        )

        const products = await Promise.all(promises).then((responses) =>
            responses.map((response) => response.data)
        )

        setProducts(products)
    }

    useEffect(() => {
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <Papper
            className={s['dropdown-widget']}
            onMouseLeave={() => openModal(false)}>
            <main>
                <header>
                    <b>Основные товары: {amount}</b>
                    <button>Очистить список</button>
                </header>
                <div className={s.list}>
                    {productsData?.map((product) => (
                        <DropDownItem
                            product={product}
                            key={product.id}
                        />
                    ))}
                </div>
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
