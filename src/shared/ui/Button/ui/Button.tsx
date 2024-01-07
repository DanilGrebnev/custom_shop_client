'use client'

import { FC, ReactNode, CSSProperties, memo, ButtonHTMLAttributes } from 'react'

import MenuIcon from '/public/static/icons/menu-icon.svg'
import ArrowIcon from '/public/static/icons/arrow.svg'
import clsx from 'clsx'
import s from './Button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    focus?: boolean
    style?: CSSProperties
    hover?: boolean
    icon?: boolean
    size?: 'M' | 'L'
    borderRadius?: 'right' | 'top'
    theme?: 'theme-1' | 'theme-2'
    menuIcon?: boolean
    open?: boolean
    children: ReactNode
    type?: 'button' | 'submit'
    disabled?: boolean
}

export const Button: FC<IButtonProps> = memo((props) => {
    const {
        children,
        hover,
        className,
        icon,
        borderRadius,
        open = false,
        menuIcon = false,
        type = 'button',
        focus,
        size = 'M',
        disabled,
        ...otherProps
    } = props

    return (
        <button
            {...otherProps}
            className={clsx(
                s.Button,
                {
                    [s.hover]: hover,
                    [s.focus]: focus,
                    [s.disabled]: disabled,
                    [s['radius-right']]: borderRadius === 'right',
                    [s['radius-top']]: borderRadius === 'top',
                },
                s[size],
                className
            )}>
            {menuIcon && (
                <MenuIcon
                    className={s['menu-icon']}
                    fill="white"
                />
            )}
            <div className={s.children}>{children}</div>
            {icon && (
                <div className={clsx(s.icon, { [s.open]: open })}>
                    <ArrowIcon
                        fill="white"
                        width={12}
                        height={12}
                    />
                </div>
            )}
        </button>
    )
})

Button.displayName = 'Button'
