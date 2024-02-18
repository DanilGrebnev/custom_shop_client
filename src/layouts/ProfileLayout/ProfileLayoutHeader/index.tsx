'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { Papper } from '@/shared/ui/Papper'
import { useGetProfileQuery } from '@/features/userProfile'
import { useLogoutFromAccountMutation } from '@/features/userProfile'
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import s from './s.module.scss'

export const ProfileLayoutHeader = () => {
    const router = useRouter()
    useGetProfileQuery()

    const [logout] = useLogoutFromAccountMutation()

    const onClick = () => {
        logout().then(() => {
            router.push(NavigationRoutes.login())
        })
    }

    return (
        <header className={s.header}>
            <Papper className={s.container}>
                <Link href={NavigationRoutes.main()}>Главная</Link>
                <Link href={NavigationRoutes.shop()}>Магазин</Link>

                <button
                    onClick={onClick}
                    className={s.logout}>
                    Выйти
                </button>
            </Papper>
        </header>
    )
}
