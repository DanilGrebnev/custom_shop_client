'use client'

import { IProduct } from '@/app/types/product'
import Image from 'next/image'
import DeleteBasket from '@/shared/assets/delete-basket.svg'
import { ICart } from '@/app/types/basket'

import s from './DropDownItem.module.scss'

interface IDropDownItem {
    product: IProduct
}

export const DropDownItem = (props: IDropDownItem) => {
    const { id, name, images, price, quantity } = props.product
    const src = process.env.NEXT_PUBLIC_URL_BACKEND! + images[0].image

    return (
        <div className={s.item}>
            <Image
                width={50}
                height={50}
                alt={name}
                src={src}
            />
            <div>{name}</div>
            <span>{price} р</span>

            <DeleteBasket
                fill="var(--text-color2)"
                className={s.icon}
            />
        </div>
    )
}
