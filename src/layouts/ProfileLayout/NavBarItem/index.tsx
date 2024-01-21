'use client'

import Link from 'next/link'
import clsx from 'clsx'
import s from './s.module.scss'
import { usePathname } from 'next/navigation'

interface INavBarItemProps {
    icon: any
    text: string
    href: string
}

export const NavBarItem = (props: INavBarItemProps) => {
    const { icon, text, href } = props
    const pathName = usePathname()

    return (
        <li className={clsx(s.item, { [s.active]: pathName === href })}>
            <Link href={href}>
                {icon}
                <p>{text}</p>
            </Link>
        </li>
    )
}
