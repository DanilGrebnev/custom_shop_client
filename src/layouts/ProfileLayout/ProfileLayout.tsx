import { ILayout } from '@/app/types/layout'
import { NavBar } from './Navbar'

import s from './ProfileLayout.module.scss'
import clsx from 'clsx'

export const ProfileLayout = ({ children }: ILayout) => {
    return (
        <section
            id="Profile-Layout"
            className={s.layout}>
            <h1 className={clsx('contain', s.title)}>Профиль</h1>
            <div className={clsx('contain', s.wrapper)}>
                <NavBar />
                {children}
            </div>
        </section>
    )
}
