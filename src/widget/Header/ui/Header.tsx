'use client'

import { SearchWidget } from '@/widget/SearchWidget'
import { CategoryMenuWidgetLazy } from '@/entities/categories'
import { HeaderUserWidget } from '@/widget/HeaderUserWidget'
import { LinkList } from './LinkList'
import { Logo } from '@/entities/settings'

import s from './Header.module.scss'
import { Dialog } from '@/shared/ui/Modal'
import { useState } from 'react'

export const Header = () => {
    const [open, setIsOpen] = useState(false)

    return (
        <header
            id="Home-Header"
            className={s.header}>
            <div className="contain">
                <button onClick={setIsOpen.bind(null, !open)}>
                    Открыть модалку
                </button>
                <div className={s['header-top']}>
                    <Logo className={s['header-section-left']} />
                    <SearchWidget />
                    <HeaderUserWidget />
                </div>
                {open && (
                    <Dialog
                        side="top"
                        onClose={() => setIsOpen(false)}>
                        <h1>Какое-то сообщение</h1>
                    </Dialog>
                )}
                <div className={s['header-bottom']}>
                    <CategoryMenuWidgetLazy />
                    <LinkList />
                </div>
            </div>
        </header>
    )
}
