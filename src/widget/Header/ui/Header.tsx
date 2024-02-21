import { SearchWidget } from '@/widget/SearchWidget'
import { CategoryMenuWidgetLazy } from '@/entities/categories'
import { HeaderUserWidget } from '@/widget/HeaderUserWidget'
import { LinkList } from './LinkList'
import { Logo } from '@/entities/settings'

import s from './Header.module.scss'

export const Header = () => {
    return (
        <header
            id="Home-Header"
            className={s.header}>
            <div className="contain">
                <div className={s['header-top']}>
                    <Logo className={s['header-section-left']} />
                    <SearchWidget />
                    <HeaderUserWidget />
                </div>
                <div className={s['header-bottom']}>
                    <CategoryMenuWidgetLazy />
                    <LinkList />
                </div>
            </div>
        </header>
    )
}
