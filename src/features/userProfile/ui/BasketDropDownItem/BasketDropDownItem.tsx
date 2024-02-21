import DeleteBasket from '@/shared/assets/delete-basket.svg'
import s from './BasketDropDownItem.module.scss'
import Image from 'next/image'

// ! Это временно, пока не будет поправлен ответ по пути api/cart
import { IProduct } from '@/app/types/product'
import { useGetSettingsQuery } from '@/entities/settings'
import { useDeleteProductFromBasketByIdMutation } from '@/features/basket'

interface IDropDownItem {
    product: IProduct
}

export const BasketDropDownItem = (props: IDropDownItem) => {
    const { id, name, images, price, quantity } = props.product
    const { data } = useGetSettingsQuery()
    const [deleteProduct] = useDeleteProductFromBasketByIdMutation()

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
