'use client'

import { MenuItem } from './components/MenuItem/MenuItem'

import { ToggleTheme } from './components/ToggleTheme'
import { useGetFooterQuery } from '../model/api/footerApi'

import s from './Footer.module.scss'

export const Footer = () => {
    const { data: footer } = useGetFooterQuery()

    return (
        <footer className={s.footer}>
            <MenuItem>{footer?.address}</MenuItem>
            <MenuItem>{footer?.contact}</MenuItem>
            <MenuItem>{footer?.email}</MenuItem>
            <MenuItem>{footer?.text}</MenuItem>
            <ToggleTheme />
        </footer>
    )
}

Footer.displayName = 'Footer'

export default Footer
