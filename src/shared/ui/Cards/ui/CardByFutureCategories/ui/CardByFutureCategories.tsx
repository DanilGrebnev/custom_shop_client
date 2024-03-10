import { FC, MouseEventHandler } from 'react'

import Image from 'next/image'

import { CardWrapper } from '@/shared/ui/Cards'

import s from './CardByFutureCategories.module.scss'

import clsx from 'clsx'

interface ICardByFutureCategoriesProps {
    className?: string
    name: string
    image: any
    amount: string
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const CardByFutureCategories: FC<ICardByFutureCategoriesProps> = (
    props
) => {
    const { onClick, amount, image, name, className } = props

    return (
        <CardWrapper
            width="full"
            onClick={onClick}
            className={clsx(s.card, className)}>
            <div className={s['img-wrapper']}>
                <Image
                    alt={name}
                    src={image}
                    fill={true}
                    priority={true}
                    sizes="(max-width: 1920px 100vw)"
                />
            </div>
            <p>{name}</p>
            <p>({amount})</p>
        </CardWrapper>
    )
}
