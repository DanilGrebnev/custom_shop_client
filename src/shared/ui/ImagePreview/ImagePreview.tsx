'use client'

import { memo, useCallback, useEffect } from 'react'

import Image from 'next/image'

import { IImage } from '@/app/types/product'

import s from './ImagePreview.module.scss'

import clsx from 'clsx'
import { v4 } from 'uuid'

interface IImagePreview {
    name: string
    images: IImage[]
    className?: string
    sizes?: string
}

export const ImagePreview = memo((props: IImagePreview) => {
    const { images, name, className } = props

    return (
        <div className={clsx(s.wrapper, className)}>
            {images.map(({ image }: IImage, i: number) => {
                if (i < 2) {
                    return (
                        <Image
                            key={image + ''}
                            fill={true}
                            src={image}
                            alt={name + ' icon'}
                            className={clsx(s.img, {
                                [s['img_' + i]]: images.length !== 1,
                            })}
                            sizes="(max-width: 1920px 100vw)"
                            priority={true}
                        />
                    )
                }
            })}
        </div>
    )
})

ImagePreview.displayName = 'ImagePreview'
