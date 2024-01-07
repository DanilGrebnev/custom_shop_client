import { type FC } from 'react'
import clsx from 'clsx'
import s from './Description.module.scss'

interface IDescriptionProps {
    className?: string
    text: string
}

export const Description: FC<IDescriptionProps> = (props) => {
    const { text, className } = props

    return <p className={clsx(s.Description, className)}>{text}</p>
}

Description.displayName = 'Description'
