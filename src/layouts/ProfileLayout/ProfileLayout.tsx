import { ILayout } from '@/app/types/layout'
import { NavBar } from './Navbar'
import { IsAuthDynamic } from '@/shared/HOC/IsAuth/IsAuthDynamic'
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
                <IsAuthDynamic>{children}</IsAuthDynamic>
            </div>
            <Footer />
        </section>
    )
}
