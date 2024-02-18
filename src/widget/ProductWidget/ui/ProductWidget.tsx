'use client'

import { Papper } from '@/shared/ui/Papper'
import { CounterButtons } from '@/shared/ui/Buttons'
import DeleteBasketIcon from '@/shared/assets/delete-basket.svg'
import Image from 'next/image'

import s from './ProductWidget.module.scss'

export const ProductWidget = () => {
    return (
        <Papper className={s['product-widget']}>
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
                <button
                    title="Удалить товар"
                    type="button"
                    className={s.delete}>
                    <DeleteBasketIcon />
                </button>
            </div>
        </Papper>
    )
}
