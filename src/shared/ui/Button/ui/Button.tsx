'use client'

import { ComponentPropsWithoutRef, FC, ReactNode, memo } from 'react'

import { useToggleTheme } from '@/app/providers/ThemeProvider'

import s from './Button.module.scss'
import ArrowIcon from '/public/static/icons/arrow.svg'
import MenuIcon from '/public/static/icons/menu-icon.svg'

import clsx from 'clsx'

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
    className?: string
    focus?: boolean
    hover?: boolean
    icon?: boolean
    size?: 'M' | 'L'
    borderRadius?: 'right' | 'top'
    menuIcon?: boolean
    open?: boolean
    children: ReactNode
    disabled?: boolean
    variant?: 'standart' | 'outlined'
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
        focus = true,
        type = 'button',
        size = 'M',
        disabled,
        variant = 'standart',
        ...restProps
    } = props

    const { theme } = useToggleTheme()

    return (
        <button
            type={type}
            className={clsx(
                s.Button,
                {
                    [s.hover]: hover,
                    [s.focus]: focus,
                    [s.disabled]: disabled,
                    [s.outlined]: variant === 'outlined',
                    [s['radius-top']]: borderRadius === 'top',
                    [s['radius-right']]: borderRadius === 'right',
                },
                s[theme],
                s[size],
                className
            )}
            {...restProps}>
            {menuIcon && (
                <MenuIcon
                    className={s['menu-icon']}
                    fill="var(--text-color1)"
                />
            )}
            <div className={s.children}>{children}</div>
            {icon && (
                <div className={clsx(s.icon, { [s.open]: open })}>
                    <ArrowIcon
                        fill="var(--text-color1)"
                        width={12}
                        height={12}
                    />
                </div>
            )}
        </button>
    )
})

Button.displayName = 'Button'
