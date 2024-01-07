import { FC, ReactNode } from 'react'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import clsx from 'clsx'
import s from './SliderContainer.module.scss'
import { Slider } from '@/shared/ui/Slider'

interface ISliderContainerProps {
    className?: string
    title: string
    children: ReactNode[]
}

export const SliderContainer: FC<ISliderContainerProps> = (props) => {
    const { children, title, className } = props

    return (
        <div className={clsx(s.SliderContainer, className)}>
            <ContainerWithTitle title={title}>
                <Slider theme="theme2">{children}</Slider>
            </ContainerWithTitle>
        </div>
    )
}
