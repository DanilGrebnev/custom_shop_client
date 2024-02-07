'use client'

import {
    ButtonHTMLAttributes,
    ComponentPropsWithoutRef,
    DetailedHTMLProps,
    type FC,
} from 'react'

import WishListIcon from '@/shared/assets/wishlist.svg'
import clsx from 'clsx'
import s from './LikeButton.module.scss'

interface ILikeButtonProps extends ComponentPropsWithoutRef<'button'> {
    active: boolean
    loading: boolean
}

export const LikeButton: FC<ILikeButtonProps> = (props) => {
    const { className, disabled, active, loading, ...other } = props

    return (
        <button
            disabled={loading || disabled}
            className={clsx(
                s.LikeButton,
                {
                    [s.active]: active,
                    [s.disabled]: loading || disabled,
                },
                className
            )}
            {...other}>
            <WishListIcon className={s.icon} />
        </button>
    )
}

LikeButton.displayName = 'LikeButtons'