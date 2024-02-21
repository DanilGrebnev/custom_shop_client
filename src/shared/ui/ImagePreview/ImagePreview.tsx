'use client'

import { useState } from 'react'
import { IImage } from '@/app/types/product'
import { v4 } from 'uuid'
import Image from 'next/image'
import clsx from 'clsx'
import s from './ImagePreview.module.scss'

interface IImagePreview {
    name: string
    images: IImage[]
    className?: string
    sizes?: string
}

export const ImagePreview = (props: IImagePreview) => {
    const { images, name, sizes, className } = props

    const renderImage = ({ image }: IImage, i: number) => {
        if (i < 2) {
            return (
                <Image
                    key={v4()}
                    fill={true}
                    src={image}
                    alt={name + ' icon'}
                    className={clsx(s.img, {
                        [s['img_' + i]]: images.length !== 1,
                    })}
                    sizes="(max-width: 1920px 100vw)"
                />
            )
        }
    }

    return (
        <div className={clsx(s.wrapper, className)}>
            {images.map(renderImage)}
        </div>
    )
}
