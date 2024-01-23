import { DetailedHTMLProps, HTMLAttributes } from 'react'
import clsx from 'clsx'
import s from './Papper.module.scss'

interface IPapperProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Papper = (props: IPapperProps) => {
    const { className, children, ...otherProps } = props
    
    return (
        <div
            className={clsx(className, s.papper)}
            {...otherProps}>
            {children}
        </div>
    )
}
