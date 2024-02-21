'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import s from './s.module.scss'

interface INavBarItemProps {
    icon: any
    label: string
    href: string
}

export const NavBarItem = (props: INavBarItemProps) => {
    const { icon, label, href } = props
    const pathName = usePathname()

    return (
        <li className={clsx(s.item, { [s.active]: pathName === href })}>
            <Link href={href}>
                {icon}
                <p className={s.label}>{label}</p>
            </Link>
        </li>
    )
}
