import { FC } from 'react'
import { CardWrapper } from '@/shared/ui/Cards'
import clsx from 'clsx'
import s from './CardByFutureCategories.module.scss'
import Image from 'next/image'

interface ICardByFutureCategoriesProps {
    className?: string
    name: string
    image: any
    amount: string
}

export const CardByFutureCategories: FC<ICardByFutureCategoriesProps> = (
    props
) => {
    const { amount, image, name, className } = props

    return (
        <CardWrapper
            width="full"
            className={clsx(s.card, className)}>
            <div className={s['img-wrapper']}>
                <Image
                    alt={name}
                    src={image}
                    fill={true}
                />
            </div>
            <p>
                {name} ({amount})
            </p>
        </CardWrapper>
    )
}
