import { DetailedHTMLProps, HTMLAttributes } from 'react'
import clsx from 'clsx'
import s from './Papper.module.scss'

interface IPapperProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fullWidth?: boolean
}

export const Papper = (props: IPapperProps) => {
    const { className, fullWidth, children, ...otherProps } = props

    return (
        <div
            className={clsx(className, { [s.fullWidth]: fullWidth }, s.papper)}
            {...otherProps}>
            {children}
        </div>
    )
}
