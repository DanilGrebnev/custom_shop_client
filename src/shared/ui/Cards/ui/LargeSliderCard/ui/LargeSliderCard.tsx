import { FC } from 'react'

import Banner1 from '/public/mock/images/main-banner-1.png'
import Image from 'next/image'
import clsx from 'clsx'

import s from './LargeSliderCard.module.scss'

interface ILargeSliderCardProps {
    className?: string
    src: any
}

export const LargeSliderCard: FC<ILargeSliderCardProps> = (props) => {
    const { className, src } = props

    return (
        <div className={clsx(s.LargeSliderCard, className)}>
            <Image
                alt="Banner"
                width={1600}
                height={480}
                src={src}
            />
        </div>
    )
}
