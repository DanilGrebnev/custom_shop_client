import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Title.module.scss'

interface TitleProps {
    size?: 'L' | 'M' | 'S'
    children: ReactNode
    borderBottom?: boolean
    className?: string
    width?: 'full' | 'content'
    hidden?: boolean
}

const TitleTag = (props: Omit<TitleProps, 'borderBottom'>) => {
    const { className, children, size } = props

    switch (size) {
        case 'L':
            return <h1 className={className}>{children}</h1>
        case 'M':
            return <h2 className={className}>{children}</h2>
        case 'S':
            return <h3 className={className}>{children}</h3>
        default:
            break
    }
}

export const Title: FC<TitleProps> = (props) => {
    const {
        size = 'L',
        borderBottom,
        children,
        className,
        hidden,
        width = 'full',
    } = props

    return (
        <TitleTag
            size={size}
            className={clsx(
                s.Title,
                {
                    [s.l]: size === 'L',
                    [s.m]: size === 'M',
                    [s.s]: size === 'S',
                    [s['border-bottom']]: borderBottom,
                    [s['width-100']]: width === 'full',
                    [s['content-width']]: width === 'content',
                    [s.hidden]: hidden,
                },
                className
            )}>
            {children}
            {borderBottom && <div className={s.underline}></div>}
        </TitleTag>
    )
}
