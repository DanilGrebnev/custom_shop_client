import { Slider } from '@/shared/ui/Slider'
import { IProduct } from '@/app/types/Product'
import Image from 'next/image'
import s from './s.module.scss'

const url = process.env.NEXT_PUBLIC_URL_BACKEND as string

interface ISliderProps {
    product: IProduct
}

export const Sliders = ({ product }: ISliderProps) => {
    const { images, name } = product
    return (
        <Slider
            buttons={false}
            className={s.slider}
            theme="theme1">
            {images?.map((image) => {
                return (
                    <Image
                        key={name}
                        alt={name}
                        src={url + image.image}
                        width={200}
                        height={200}
                    />
                )
            })}
        </Slider>
    )
}
