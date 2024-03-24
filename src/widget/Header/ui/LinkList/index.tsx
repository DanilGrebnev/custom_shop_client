'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './s.module.scss'

import clsx from 'clsx'

const a = [
    { link: NavigationRoutes.main, text: 'Главная' },
    {
        link: NavigationRoutes.category(''),
        text: 'Каталог',
    },
    {
        link: NavigationRoutes.profileMe,
        text: 'Личный кабинет',
    },
]

interface ILinkList {
    className?: string
}

export const LinkList = ({ className }: ILinkList) => {
    const pathname = usePathname()

    return (
        <ul className={clsx(s['page-list'], className)}>
            {a.map(({ link, text }) => {
                return (
                    <li
                        key={link}
                        className={s['list-item']}>
                        <Link
                            className={clsx({ [s.active]: pathname === link })}
                            href={link}>
                            {text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
