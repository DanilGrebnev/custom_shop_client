'use client'

import { type FC, memo } from 'react'
import Link from 'next/link'
import { Rating } from '@/shared/ui/Rating'
import Image, { StaticImageData } from 'next/image'
import blurImg from '@/shared/assets/blur.webp'

import s from './InputSearchProductItem.module.scss'

interface IInputSearchProductItemProps {
    image: string | StaticImageData
    alt: string
    productName: string
    price: number
    onClick?: () => void
    productId: number
}

export const InputSearchProductItem: FC<IInputSearchProductItemProps> = memo(
    (props) => {
        const { onClick, productId, productName, price, alt, image } = props

        return (
            <Link
                className={s.item}
                onClick={onClick}
                href={'/product/' + productId}>
                <Image
                    placeholder="blur"
                    blurDataURL={blurImg.blurDataURL}
                    alt={alt}
                    src={image}
                    width={80}
                    height={80}
                />
                <div className={s['item-info']}>
                    <p>{productName}</p>
                    <Rating rating={3} />
                    <p className={s.price}>₽ {price}</p>
                </div>
            </Link>
        )
    }
)

InputSearchProductItem.displayName = 'InputSearchProductItem'
