import { ILayout } from '@/app/types/layout'
import { NavBar } from './Navbar'
import { Footer } from '@/entities/footer'
import { ProfileLayoutHeader } from './ProfileLayoutHeader'

import clsx from 'clsx'
import s from './ProfileLayout.module.scss'

export const ProfileLayout = ({ children }: ILayout) => {
    return (
        <section
            id="Profile-Layout"
            className={s.layout}>
            <div className={clsx('contain', s.wrapper)}>
                <ProfileLayoutHeader />
                <NavBar />
                {children}
            </div>
            <Footer />
        </section>
    )
}
