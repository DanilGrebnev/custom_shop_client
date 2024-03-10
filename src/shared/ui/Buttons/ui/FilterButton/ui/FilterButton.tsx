import { ComponentPropsWithoutRef } from 'react'

import CrossIcon from '@/shared/assets/cross.svg'

import { useToggleTheme } from '@/app/providers/ThemeProvider'

import s from './FilterButton.module.scss'

import clsx from 'clsx'

interface IProps extends ComponentPropsWithoutRef<'button'> {
    label?: string
    withIcon?: boolean
}

export const FilterButton = (props: IProps) => {
    const { className, label, children, withIcon = true, ...otherProps } = props
    const { theme } = useToggleTheme()

    return (
        <button
            {...otherProps}
            className={clsx(s.filter, s[theme], className)}>
            <span className={s.description}>{children}</span>
            {withIcon && (
                <div className={s['cross-wrapper']}>
                    <CrossIcon className={s['cross-icon']} />
                </div>
            )}
        </button>
    )
}
