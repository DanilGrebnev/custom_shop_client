'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { useGetSettingsQuery } from '../../model/api/settingApi'

import Image from 'next/image'
import Link from 'next/link'
import s from './Logo.module.scss'

export const Logo = () => {
    const { data, isLoading } = useGetSettingsQuery()

    if (isLoading) {
        return <h1>Загрузка</h1>
    }

    return (
        <Link
            className={s.logo}
            href={NavigationRoutes.main()}>
            <Image
                width={130}
                height={100}
                alt="Логотип"
                src={process.env.NEXT_PUBLIC_URL_BACKEND! + data?.homeLogo}
            />
        </Link>
    )
}

export default Logo
