import RefreshIcon from '/public/static/icons/compare.svg'
import WishListIcon from '/public/static/icons/wishlist.svg'
import CartIcon from '/public/static/icons/cart.svg'
import TargetStoreLogo from '/public/static/images/logo.svg'
import { CategoryMenuWidget } from '@/entities/categories'
import { SearchWidget } from '@/widget/SearchWidget'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import Link from 'next/link'

import { clsx } from 'clsx'
import s from './Header.module.scss'

export const Header = () => {
    return (
        <header
            id="Header"
            className={s['header']}>
            <div className="contain">
                <div className={s['header-top']}>
                    <div className={s['header-section-left']}>
                        <Link href={NavigationRoutes.main()}>
                            <TargetStoreLogo />
                        </Link>
                    </div>

                    <SearchWidget />

                    <div className={s['header-section-user']}>
                        <div className={s['user-icon']}>
                            <RefreshIcon />
                            <span>0</span>
                        </div>

                        <div className={s['user-icon']}>
                            <WishListIcon />
                            <span>0</span>
                        </div>

                        <div className={s['user-icon']}>
                            <CartIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>

                <div className={s['header-bottom']}>
                    <CategoryMenuWidget />
                    <ul
                        className={clsx(
                            s['page-list'],
                            s['header-bottom-section-center']
                        )}>
                        <li className={s['list-item']}>
                            <Link href={NavigationRoutes.main()}>Home</Link>
                        </li>
                        <li className={s['list-item']}>
                            <Link href={NavigationRoutes.shop()}>Shop</Link>
                        </li>
                        <li className={s['list-item']}>
                            <a>More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
