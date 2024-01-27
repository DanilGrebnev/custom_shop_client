'use client'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import Link from 'next/link'
import clsx from 'clsx'
import s from './s.module.scss'
import { usePathname } from 'next/navigation'

const a = [
    { link: NavigationRoutes.main(), text: 'Главная' },
    {
        link: NavigationRoutes.shop(),
        text: 'Магазин',
    },
    {
        link: NavigationRoutes.profileMe(),
        text: 'Личный кабинет',
    },
]

export const LinkList = () => {
    const pathname = usePathname()

    return (
        <ul className={s['page-list']}>
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
