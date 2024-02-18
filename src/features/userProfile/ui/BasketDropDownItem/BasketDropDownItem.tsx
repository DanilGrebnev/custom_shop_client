import DeleteBasket from '@/shared/assets/delete-basket.svg'
import s from './BasketDropDownItem.module.scss'
import Image from 'next/image'

// ! Это временно, пока не будет поправлен ответ по пути api/cart
import { IProduct } from '@/app/types/product'

interface IDropDownItem {
    product: IProduct
}

export const BasketDropDownItem = (props: IDropDownItem) => {
    const { id, name, images, price, quantity } = props.product

    return (
        <div className={s.wrapper}>
            <Image
                width={50}
                height={50}
                alt={name}
                src={images[0].image}
            />
            
            <div>{name}</div>
            <span>{price} р</span>

            <DeleteBasket
                className={s['delete-icon']}
                fill="var(--text-color2)"
            />
        </div>
    )
}
