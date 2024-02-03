'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { Papper } from '@/shared/ui/Papper'
import { useGetProfileQuery, userProfileActions } from '@/features/userProfile'
import { useAppDispatch } from '@/shared/hooks'
import { useRouter } from 'next/navigation'
import { useLogoutFromAccountMutation } from '@/features/userProfile'

import s from './s.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'

export const ProfileLayoutHeader = () => {
    const dispatch = useAppDispatch()
    const { data } = useGetProfileQuery()

    useEffect(() => {
        dispatch(userProfileActions.setProfileFields(data))
    }, [data, dispatch])

    const [logout] = useLogoutFromAccountMutation()
    const router = useRouter()

    const onClick = () => {
        logout().then(() => {
            dispatch(userProfileActions.setIsAuth(false))
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
