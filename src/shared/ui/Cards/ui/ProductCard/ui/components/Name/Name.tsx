import { FC } from 'react'
import clsx from 'clsx'
import s from './Name.module.scss'

interface INameProps {
    className?: string
    name: string
}

export const Name: FC<INameProps> = (props) => {
    const { className, name } = props

    return <h2 className={clsx(s.Title, className)}>{name}</h2>
}
