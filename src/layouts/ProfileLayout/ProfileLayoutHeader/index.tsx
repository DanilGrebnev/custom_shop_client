'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { Papper } from '@/shared/ui/Papper'
import { UserProfileServices, userProfileActions } from '@/features/userProfile'
import { useAppDispatch } from '@/shared/hooks'
import { useRouter } from 'next/navigation'

import s from './s.module.scss'
import Link from 'next/link'

export const ProfileLayoutHeader = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const onClick = () => {
        dispatch(UserProfileServices.userProfileLogout())
            .unwrap()
            .then(() => {
                dispatch(userProfileActions.setIsAuth(true))
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
