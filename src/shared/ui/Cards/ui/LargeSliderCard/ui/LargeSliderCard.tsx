import { FC } from 'react'

import Image from 'next/image'

import s from './LargeSliderCard.module.scss'

import clsx from 'clsx'

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
                priority={true}
            />
        </div>
    )
}
