'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderButton } from '@/shared/ui/SliderButton'
import { Thumbs } from 'swiper/modules'
// import mock from '@/mock/mock'

import blurImg from '@/shared/assets/blur.webp'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import './ThumbsGallery.scss'

interface IThumbsGalleryProps {
    images: { image: string | StaticImageData }[]
    alt: string
}

export const ThumbsGallery = (props: IThumbsGalleryProps) => {
    const { images, alt } = props
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    const urlToBackend = process.env.NEXT_PUBLIC_URL_BACKEND as string

    return (
        <div className="thumbs-gallery">
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
                className="main-swiper">
                {images.map((item, i) => {
                    return (
                        <SwiperSlide
                            className="main-swiper__slide"
                            key={i}>
                            <Image
                                placeholder="blur"
                                blurDataURL={blurImg.blurDataURL}
                                alt={alt}
                                width={1000}
                                quality={100}
                                height={1000}
                                src={urlToBackend + item.image}
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
                {images.map((item, i) => {
                    return (
                        <SwiperSlide
                            className="navigation-swiper__slide"
                            key={i}>
                            <Image
                                placeholder="blur"
                                blurDataURL={blurImg.blurDataURL}
                                alt={alt}
                                width={102}
                                height={102}
                                quality={50}
                                src={urlToBackend + item.image}
                            />
                        </SwiperSlide>
                    )
                })}

                <SliderButton
                    prev
                    className="btn-prev"
                    theme="theme2"
                />

                <SliderButton
                    next
                    className="btn-next"
                    theme="theme2"
                />
            </Swiper>
        </div>
    )
}

ThumbsGallery.displayName = 'ThumbsGallery'
