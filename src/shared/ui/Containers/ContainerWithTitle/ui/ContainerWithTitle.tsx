import { FC, CSSProperties, ReactNode } from 'react'
import { Title } from '@/shared/ui/Title'

import clsx from 'clsx'
import s from './ContainerWithTitle.module.scss'

interface ContainerWithTitleProps {
    className?: string
    title?: string | ReactNode
    children?: ReactNode
    style?: CSSProperties
}

export const ContainerWithTitle: FC<ContainerWithTitleProps> = (props) => {
    const { className, title, children, style } = props

    return (
        <div
            style={style}
            className={clsx(className, s.WidgetContainer, 'contain')}>
            <div className={s['bottom-line']}>
                <Title
                    size="M"
                    borderBottom>
                    {title}
                </Title>
            </div>
            {children}
        </div>
    )
}

ContainerWithTitle.displayName = 'ContainerWithTitle'
