'use client'

import { useCallback, useState } from 'react'

import Image from 'next/image'

import DeleteBasketIcon from '@/shared/assets/delete-basket.svg'
import { CounterButtons } from '@/shared/ui/Buttons'
import { Papper } from '@/shared/ui/Papper'

import { ICartItem } from '@/app/types/basket'

import { DeleteModal } from './DeleteModal/DeleteModal'
import s from './ProductWidget.module.scss'

import { LikeButtonWidget } from '@/widget/LikeButton'
import clsx from 'clsx'

interface IProps {
    className?: string
    cartItem: ICartItem
}

export const ProductWidget = (props: IProps) => {
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
                <CounterButtons />
                <div className={s.stock}>
                    <p>В наличии:</p> <span>{cartItem.product.quantity}</span>
                </div>
            </div>
            <div className={s['btn-group']}>
                {/*Данный компонент вызывает ошибку!*/}
                <LikeButtonWidget
                    className={clsx(s.btn)}
                    variant="standart"
                    productId={0}
                />
                <button
                    title="Удалить товар"
                    type="button"
                    className={clsx(s.delete, s.btn)}
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
