'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useGetProfileQuery } from '@/features/userProfile'
import { useLogoutFromAccountMutation } from '@/features/userProfile'

import { Papper } from '@/shared/ui/Papper'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './s.module.scss'

export const ProfileLayoutHeader = () => {
    const router = useRouter()
    useGetProfileQuery()

    const [logout] = useLogoutFromAccountMutation()

    const onClick = () => {
        logout().then(() => {
            router.push(NavigationRoutes.login)
        })
    }

    return (
        <header className={s.header}>
            <Papper className={s.container}>
                <Link href={NavigationRoutes.main}>Главная</Link>
                <Link href={NavigationRoutes.shop}>Магазин</Link>

                <button
                    onClick={onClick}
                    className={s.logout}>
                    Выйти
                </button>
            </Papper>
        </header>
    )
}
