import { ComponentPropsWithRef, forwardRef } from 'react'

import clsx from 'clsx'
import s from './Papper.module.scss'

interface IPapperProps extends ComponentPropsWithRef<'div'> {
    fullWidth?: boolean
}

export const Papper = forwardRef<HTMLDivElement, IPapperProps>((props, ref) => {
    const { className, fullWidth, children, ...otherProps } = props

    return (
        <div
            ref={ref}
            className={clsx(
                className,
                {
                    [s.fullWidth]: fullWidth,
                },
                s.papper
            )}
            {...otherProps}>
            {children}
        </div>
    )
})

Papper.displayName = 'Papper'
