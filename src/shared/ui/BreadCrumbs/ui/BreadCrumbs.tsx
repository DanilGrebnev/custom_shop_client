import { FC, CSSProperties } from 'react'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer'
import Link from 'next/link'

import clsx from 'clsx'
import s from './BreadCrumbs.module.scss'

interface IBreadCrumb {
    label: string
    href: string
    active?: boolean

    onClick?: (...args: any) => any
}

interface IBreadCrumbsProps {
    className?: string
    breadcrumbs: IBreadCrumb[]
    style?: CSSProperties
    current?: string
}

export const BreadCrumbs: FC<IBreadCrumbsProps> = (props) => {
    const { className, current, breadcrumbs, style } = props

    return (
        <FullWidthContainer
            style={style}
            className={clsx(s.BreadCrumbs, className)}>
            <nav
                className="contain"
                aria-label="Breadcrumb">
                <ol className={s['breadcrumbs-wrapper']}>
                    {breadcrumbs.map(({ href, label, active }, i) => {
                        return (
                            <li key={i}>
                                <Link
                                    className={clsx(s.link, {
                                        [s.active]: active,
                                    })}
                                    href={href}>
                                    {label}
                                </Link>
                                {i < breadcrumbs.length - 1 ? (
                                    <span className={s.slash}>/</span>
                                ) : null}
                            </li>
                        )
                    })}
                </ol>
            </nav>
            {current && <h1 className={clsx('contain', s.title)}>{current}</h1>}
        </FullWidthContainer>
    )
}

BreadCrumbs.displayName = 'BreadCrumbs'
