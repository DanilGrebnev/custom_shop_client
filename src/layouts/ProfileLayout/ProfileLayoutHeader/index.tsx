import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { Papper } from '@/shared/ui/Papper'
import s from './s.module.scss'
import Link from 'next/link'

export const ProfileLayoutHeader = () => {

    return (
        <header className={s.header}>
            <Papper className={s.content}>
                <Link href={NavigationRoutes.main()}>Главная</Link>
                <Link href={NavigationRoutes.shop()}>Магазин</Link>
            </Papper>
        </header>
    )
}
