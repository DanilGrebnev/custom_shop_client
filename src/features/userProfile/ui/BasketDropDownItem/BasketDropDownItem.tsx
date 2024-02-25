// ! Это временно, пока не будет поправлен ответ по пути api/cart
import { IProduct } from '@/app/types/product'
import { useEffect } from 'react'

import Image from 'next/image'

import { useDeleteProductFromBasketByIdMutation } from '@/features/basket'

import { useGetSettingsQuery } from '@/entities/settings'

import DeleteBasket from '@/shared/assets/delete-basket.svg'

import s from './BasketDropDownItem.module.scss'

interface IDropDownItem {
    product: IProduct
}

export const BasketDropDownItem = (props: IDropDownItem) => {
    const { id, name, images, price, quantity } = props.product
    const { data } = useGetSettingsQuery()
    const [deleteProduct, { data: deleteResult }] =
        useDeleteProductFromBasketByIdMutation()

    useEffect(() => {
        console.log(deleteResult)
    }, [deleteResult])

    return (
        <div className={s.wrapper}>
            {images?.[0]?.image ? (
                <Image
                    width={50}
                    height={50}
                    alt={'icon ' + name}
                    src={images?.[0]?.image}
                />
            ) : (
                <div>Нет изображения</div>
            )}

            <div>{name}</div>
            <span>
                {price} {data?.currency}
            </span>

            <DeleteBasket
                className={s['delete-icon']}
                fill="var(--text-color2)"
                onClick={() => {
                    deleteProduct({
                        quantity: 0,
                        product: id,
                    })
                }}
            />
        </div>
    )
}
