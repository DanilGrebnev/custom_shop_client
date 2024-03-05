'use client'

import {
    ButtonHTMLAttributes,
    ComponentPropsWithoutRef,
    DetailedHTMLProps,
    type FC,
} from 'react'

import WishListIcon from '@/shared/assets/wishlist.svg'

import s from './LikeButton.module.scss'

import clsx from 'clsx'

interface ILikeButtonProps extends ComponentPropsWithoutRef<'button'> {
    active: boolean
    loading?: boolean
    variant?: 'outline' | 'standart'
}

export const LikeButton: FC<ILikeButtonProps> = (props) => {
    const {
        variant = 'outline',
        className,
        disabled,
        active,
        loading,
        ...other
    } = props

    return (
        <button
            disabled={loading || disabled}
            title="Добавить товар в избранное"
            type="button"
            className={clsx(
                s.LikeButton,
                {
                    [s.active]: active,
                    [s.disabled]: loading || disabled,
                },
                s[variant],
                className
            )}
            {...other}>
            <WishListIcon className={s.icon} />
        </button>
    )
}

LikeButton.displayName = 'LikeButtons'
