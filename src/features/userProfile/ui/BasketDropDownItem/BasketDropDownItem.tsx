import Image from 'next/image'

import { useDeleteProductFromBasketByIdMutation } from '@/features/basket'

import { useGetSettingsQuery } from '@/entities/settings'

import DeleteBasket from '@/shared/assets/delete-basket.svg'

import { ICartItem } from '@/app/types/basket'

import s from './BasketDropDownItem.module.scss'

interface IDropDownItem {
    cartItem: ICartItem
}

export const BasketDropDownItem = (props: IDropDownItem) => {
    const { cartItemId, product } = props.cartItem
    const { data } = useGetSettingsQuery()

    const [deleteProduct, { data: deleteResult }] =
        useDeleteProductFromBasketByIdMutation()

    return (
        <div className={s.wrapper}>
            <Image
                width={50}
                height={50}
                alt={'icon ' + product.name}
                src={product.image}
                priority={true}
                className={s.img}
            />

            <div>{product.name}</div>
            <span>
                {product.price} {data?.currency}
            </span>

            <DeleteBasket
                className={s['delete-icon']}
                fill="var(--text-color2)"
                onClick={deleteProduct.bind(null, cartItemId)}
            />
        </div>
    )
}
