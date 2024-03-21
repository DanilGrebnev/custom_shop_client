import { ReactNode } from 'react'

import Link from 'next/link'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './s.module.scss'

import clsx from 'clsx'

interface CustomLink {
    categoryId: string
    last?: boolean
    children?: ReactNode
    className?: string
}

export const CustomCategoryLink = ({
    categoryId,
    last,
    children,
    className,
}: CustomLink) => {
    const link = !last
        ? NavigationRoutes.category(categoryId)
        : `/shop/${categoryId}`
        
    return (
        <Link
            className={clsx(s.link, className)}
            href={link}>
            {children}
        </Link>
    )
}
