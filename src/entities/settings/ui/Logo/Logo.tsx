'use client'

import { useAppSelector } from '@/shared/hooks'
import { SettingSelectors } from '../../model/selectors/settingsSelector'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
// import TargetStoreLogo from '/public/static/images/logo.svg'

import Image from 'next/image'
import Link from 'next/link'
import s from './Logo.module.scss'

export const Logo = () => {
    const logo = useAppSelector(SettingSelectors.getLogo)
    const isLoading = useAppSelector(SettingSelectors.getIsLoading)

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
                src={process.env.NEXT_PUBLIC_URL_BACKEND + logo}
            />
        </Link>
    )
}

export default Logo
