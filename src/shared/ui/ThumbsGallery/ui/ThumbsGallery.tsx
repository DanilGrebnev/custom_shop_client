'use client'

import React, { useState } from 'react'

import Image, { StaticImageData } from 'next/image'

import blurImg from '@/shared/assets/blur.webp'
import { SliderButton } from '@/shared/ui/SliderButton'

import './ThumbsGallery.scss'

import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IThumbsGalleryProps {
    images?: { image: string | StaticImageData }[]
    alt?: string
    thumbGalleryClass?: string
    bigImgClass?: string
    smallImgClass?: string
}

export const ThumbsGallery = (props: IThumbsGalleryProps) => {
    const { images, alt, bigImgClass, smallImgClass, thumbGalleryClass } = props
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    return (
        <div className={clsx('thumbs-gallery', thumbGalleryClass)}>
            <Swiper
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
                className="main-swiper">
                {images?.map((item, i) => {
                    return (
                        <SwiperSlide
                            className="main-swiper__slide"
                            key={i}>
                            <Image
                                className={clsx(
                                    'main-swiper__img',
                                    bigImgClass
                                )}
                                placeholder="blur"
                                blurDataURL={blurImg.blurDataURL}
                                alt={alt ?? ''}
                                width={600}
                                height={600}
                                quality={100}
                                src={item.image}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                className="navigation-swiper">
                {images?.map((item, i) => {
                    return (
                        <SwiperSlide
                            className={clsx(
                                'navigation-swiper__slide',
                                smallImgClass
                            )}
                            key={i}>
                            <Image
                                className="navigation-swiper__img"
                                placeholder="blur"
                                blurDataURL={blurImg.blurDataURL}
                                alt={alt ?? ''}
                                width={102}
                                height={102}
                                quality={50}
                                src={item.image}
                            />
                        </SwiperSlide>
                    )
                })}

                <SliderButton
                    prev={true}
                    className="btn-prev"
                    theme="theme2"
                />

                <SliderButton
                    next={true}
                    className="btn-next"
                    theme="theme2"
                />
            </Swiper>
        </div>
    )
}

ThumbsGallery.displayName = 'ThumbsGallery'
