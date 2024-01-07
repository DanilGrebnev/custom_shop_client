'use client'

import { type FC, memo } from 'react'
import { v4 } from 'uuid'
import { IProduct } from '@/app/types/Product'
import { InputSearchProductItem } from './components/InputSearchProductItem'

import s from './InputSearchProductList.module.scss'
import clsx from 'clsx'

interface IInputSearchProductListProps {
    className?: string
    products: IProduct[]
    onClick?: () => void
}

export const InputSearchProductList: FC<IInputSearchProductListProps> = memo(
    (props) => {
        const { className, onClick, products } = props

        return (
            <div
                id="InputSearchProductList"
                className={clsx(s['product-list'], className)}>
                {products.map((product) => {
                    return (
                        <InputSearchProductItem
                            key={v4()}
                            alt={product.name}
                            image={product.images[0].image}
                            onClick={onClick}
                            productId={product.id}
                            price={product.price}
                            productName={product.name}
                        />
                    )
                })}
            </div>
        )
    }
)

InputSearchProductList.displayName = 'InputSearchProductList'
