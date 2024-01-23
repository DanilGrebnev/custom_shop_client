import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import Link from 'next/link'
import s from './s.module.scss'

export const LinkList = () => {
    return (
        <ul className={s['page-list']}>
            <li className={s['list-item']}>
                <Link href={NavigationRoutes.main()}>Главная</Link>
            </li>
            <li className={s['list-item']}>
                <Link href={NavigationRoutes.shop()}>Магазин</Link>
            </li>
            <li className={s['list-item']}>
                <a>Личный кабинет</a>
            </li>
        </ul>
    )
}
