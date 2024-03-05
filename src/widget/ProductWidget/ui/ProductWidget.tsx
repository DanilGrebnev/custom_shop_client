'use client'

import { useCallback, useState } from 'react'

import Image from 'next/image'

import DeleteBasketIcon from '@/shared/assets/delete-basket.svg'
import { CounterButtons } from '@/shared/ui/Buttons'
import { Papper } from '@/shared/ui/Papper'

import { DeleteModal } from './DeleteModal/DeleteModal'
import s from './ProductWidget.module.scss'

import { LikeButtonWidget } from '@/widget/LikeButton'
import clsx from 'clsx'

interface IProps {
    className?: string
}

export const ProductWidget = ({ className }: IProps) => {
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
                src="/static/images/test1.jpg"
                className={s['product__image']}
            />
            <div className={s.content}>
                <h4 className={s['content__title']}>
                    2.0, внутриканальные, Bluetooth, 5.3
                </h4>
                <CounterButtons />
                <div className={s.stock}>
                    <p>В наличии:</p> <span>5</span>
                </div>
            </div>
            <div className={s['btn-group']}>
                <LikeButtonWidget
                    className={clsx(s.btn)}
                    variant="standart"
                    productId="#"
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
                        onClose={onClose}
                        className={s['delete-modal']}
                    />
                )}
            </div>
        </Papper>
    )
}
