import { ComponentPropsWithRef, forwardRef } from 'react'

import s from './Papper.module.scss'

import clsx from 'clsx'

interface IPapperProps extends ComponentPropsWithRef<'div'> {
    fullWidth?: boolean
}

export const Papper = forwardRef<HTMLDivElement, IPapperProps>((props, ref) => {
    const { className, fullWidth, children, ...otherProps } = props

    return (
        <div
            ref={ref}
            className={clsx(
                {
                    [s.fullWidth]: fullWidth,
                },
                s.papper,
                className
            )}
            {...otherProps}>
            {children}
        </div>
    )
})

Papper.displayName = 'Papper'
