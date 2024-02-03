'use client'

import { ButtonHTMLAttributes, DetailedHTMLProps, type FC } from 'react'
import { IButton } from '../types'

import WishListIcon from '@/shared/assets/wishlist.svg'
import clsx from 'clsx'
import s from './LikeButton.module.scss'

interface ILikeButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    active: boolean
    loading: boolean
}

export const LikeButton: FC<ILikeButtonProps> = (props) => {
    const { className, disabled, active, loading } = props

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
            {...props}>
            <WishListIcon className={s.icon} />
        </button>
    )
}

LikeButton.displayName = 'LikeButtons'
