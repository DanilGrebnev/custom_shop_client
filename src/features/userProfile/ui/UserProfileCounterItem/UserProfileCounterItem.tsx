'use client'

import { ComponentPropsWithRef, useRef, useState } from 'react'
import { ModalBackgroundFilter } from '@/shared/ui/Modal'

import s from './s.module.scss'
import Link from 'next/link'

interface IUserProfileCounterItemProps extends ComponentPropsWithRef<'a'> {
    icon: any
    count?: number
    href?: string
    label?: string
    data?: any
}

export const UserProfileCounterItem = (props: IUserProfileCounterItemProps) => {
    const { count = 0, href, icon, label, onMouseEnter, onMouseLeave } = props

    return (
        <Link
            className={s['counter-wrapper']}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href={href || ''}>
            <div className={s.counter}>
                {icon}
                <span>{count}</span>
            </div>
            <p className={s.label}>{label}</p>
        </Link>
    )
}

export default UserProfileCounterItem
