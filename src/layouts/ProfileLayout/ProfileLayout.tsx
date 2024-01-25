import { ILayout } from '@/app/types/layout'
import { NavBar } from './Navbar'
import { IsAuthDynamic } from '@/shared/HOC/IsAuth/IsAuthDynamic'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import clsx from 'clsx'
import Link from 'next/link'
import s from './ProfileLayout.module.scss'

export const ProfileLayout = ({ children }: ILayout) => {
    return (
        <section
            id="Profile-Layout"
            className={s.layout}>
            <h1 className={clsx('contain', s.title)}>Профиль</h1>
            <Link
                className="contain"
                href={NavigationRoutes.main()}>
                На главную
            </Link>
            <div className={clsx('contain', s.wrapper)}>
                <NavBar />
                <IsAuthDynamic>{children}</IsAuthDynamic>
            </div>
        </section>
    )
}
