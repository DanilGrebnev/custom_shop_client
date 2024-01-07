import { FC } from 'react'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import s from './Button.module.scss'

interface IButtonProps {
    className?: string
}

export const CardButton: FC<IButtonProps> = (props) => {
    const { className } = props

    return (
        <Button
            hover={true}
            className={clsx(s.Button, className)}>
            Select Options
        </Button>
    )
}
