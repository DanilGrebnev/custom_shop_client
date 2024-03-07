import { Logo } from '@/entities/settings'

import s from './Header.module.scss'
import { LinkList } from './LinkList'

import { HeaderCategoryDropDown } from '@/widget/HeaderCategoryDropDown'
import { HeaderUserWidget } from '@/widget/HeaderUserWidget'
import { SearchWidget } from '@/widget/SearchWidget'

export const Header = () => {
    return (
        <header
            id="Home-Header"
            className={s.header}>
            <div className="contain">
                <div className={s['header-top']}>
                    <Logo className={s.logo} />
                    <SearchWidget className={s['search-widget']} />
                    <HeaderUserWidget className={s['user-widget']} />
                </div>
                <div className={s['header-bottom']}>
                    <HeaderCategoryDropDown />
                    <LinkList />
                </div>
            </div>
        </header>
    )
}
