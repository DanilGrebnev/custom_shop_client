'use client'

import { ComponentPropsWithRef, forwardRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import { useGetSettingsQuery } from '../../model/api/settingApi'

import clsx from 'clsx'

interface ILogo extends ComponentPropsWithRef<'a'> {}

export const Logo = forwardRef<HTMLAnchorElement, ILogo>((props, ref) => {
    const { className, ...otherProps } = props
    const { data, isLoading } = useGetSettingsQuery()

    if (isLoading) {
        return <h1>Загрузка</h1>
    }

    return (
        <Link
            className={clsx(className)}
            ref={ref}
            {...otherProps}
            href={NavigationRoutes.main}>
            <Image
                width={130}
                height={100}
                alt="Логотип"
                src={process.env.NEXT_PUBLIC_URL_BACKEND! + data?.homeLogo}
                priority={true}
            />
        </Link>
    )
})

Logo.displayName = 'Logo'

export default Logo
