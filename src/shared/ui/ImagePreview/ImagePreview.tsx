'use client'

import { useState } from 'react'
import { IImage } from '@/app/types/Product'
import Image from 'next/image'
import clsx from 'clsx'
import s from './ImagePreview.module.scss'

interface Props {
    name: string
    images: IImage[]
    className?: string
}

export const ImagePreview = (props: Props) => {
    const { images, name, className } = props
    const [src, setSrc] = useState(images[0].image)

    const onHover = () => {
        const src = images?.[1]?.image
        if (!src) return
        setSrc(src)
    }

    const onBlur = () => {
        setSrc(images[0].image)
    }

    return (
        <div
            onMouseEnter={onHover}
            onMouseLeave={onBlur}
            className={clsx(s['img-wrapper'], className)}>
            <Image
                fill={true}
                src={src}
                alt={`${name} icon`}
                className={clsx(s.img, s.img1)}
                sizes="(max-width: 1920px 100vw)"
            />
        </div>
    )
}
