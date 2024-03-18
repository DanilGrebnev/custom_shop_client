'use client'

import { useCallback, useState } from 'react'

import Image from 'next/image'

import { ToggleAmountItemInBasket } from '@/features/basket'

import DeleteBasketIcon from '@/shared/assets/delete-basket.svg'
import { Papper } from '@/shared/ui/Papper'

import { ICartItem } from '@/app/types/basket'

import s from './BasketProductItem.module.scss'
import { DeleteModal } from './DeleteModal/DeleteModal'

import { LikeButtonWidget } from '@/widget/LikeButton'
import clsx from 'clsx'

interface IProps {
    className?: string
    cartItem: ICartItem
}

export const BasketProductItem = (props: IProps) => {
    const { cartItem, className } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <Papper className={clsx(s['product-widget'], className)}>
            <Image
                alt={'asd'}
                width={100}
                height={100}
                src={cartItem.product.image}
                className={s['product__image']}
            />
            <div className={s.content}>
                <h4 className={s['content__title']}>{cartItem.product.name}</h4>
                <ToggleAmountItemInBasket
                    itemAmountInBasket={cartItem.quantity}
                    currentItemAmount={cartItem.product.quantity}
                    cartItemId={cartItem.cartItemId}
                />
                <div className={s.stock}>
                    <p>В наличии:</p> <span>{cartItem.product.quantity}</span>
                </div>
            </div>
            <div className={s['btn-group']}>
                <LikeButtonWidget
                    className={clsx(s['like-button'], s.button, s.svg)}
                    variant="standart"
                    productId={cartItem.product.productId}
                />
                <button
                    title="Удалить товар"
                    type="button"
                    className={clsx(s['delete-button'], s.button, s.svg)}
                    onClick={() => setIsOpen(true)}>
                    <DeleteBasketIcon />
                </button>
                {isOpen && (
                    <DeleteModal
                        cartItemId={cartItem.cartItemId}
                        onClose={onClose}
                        className={s['delete-modal']}
                    />
                )}
            </div>
        </Papper>
    )
}
