import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Blur from '@/shared/assets/blur.webp'
import clsx from 'clsx'
import s from './CardPreview.module.scss'

interface ICardPreviewProps {
    className?: string
    images: { image: string | StaticImageData }[]
    alt: string
}

export const CardPreview: FC<ICardPreviewProps> = (props) => {
    const { images, alt, className } = props

    return (
        <div className={clsx(s['card-preview'], className)}>
            {images?.map(({ image }, i) => {
                return (
                    <Image
                        placeholder="blur"
                        blurDataURL={Blur.blurDataURL}
                        key={i}
                        alt={alt}
                        width={200}
                        height={200}
                        loading="lazy"
                        className={clsx(s.img, s[`preview-${i}`])}
                        src={image}
                    />
                )
            })}
        </div>
    )
}
