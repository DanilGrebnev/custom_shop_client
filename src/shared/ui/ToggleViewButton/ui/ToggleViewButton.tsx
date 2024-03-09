import { FC } from 'react'

import s from './ToggleViewButton.module.scss'

import clsx from 'clsx'

interface IToggleViewButtonProps {
    className?: string
    theme?: 'cell' | 'list'
    active?: boolean
    onClick: () => void
}

export const ToggleViewButton: FC<IToggleViewButtonProps> = (props) => {
    const { className, active, onClick, theme = 'cell' } = props

    return (
        <div
            onClick={onClick}
            className={clsx(
                s.ToggleViewButton,
                { [s.active]: active },
                s[theme],
                className
            )}>
            {Array(9)
                .fill('')
                .map((_, i) => (
                    <div key={i}></div>
                ))}
        </div>
    )
}

ToggleViewButton.displayName = 'ToggleViewButton'
