'use client'

import { useEffect } from 'react'
import { fetchFooter } from '../model/services/fetchFooter'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { GetFooterSelector } from '../model/selectors/getFooterSelector'
import { MenuItem } from './components/MenuItem/MenuItem'

import s from './Footer.module.scss'
import { ThemeToggler } from '@/app/providers/ThemeProvider'
import { ToggleTheme } from './components/ToggleTheme'

export const Footer = () => {
    const dispatch = useAppDispatch()
    const footer = useAppSelector(GetFooterSelector.getFooterData)
    const isLoading = useAppSelector(GetFooterSelector.getFooterIsLoading)

    useEffect(() => {
        dispatch(fetchFooter())
    }, [dispatch])

    return (
        <footer className={s.footer}>
            <MenuItem>{footer.address}</MenuItem>
            <MenuItem>{footer.contact}</MenuItem>
            <MenuItem>{footer.email}</MenuItem>
            <MenuItem>{footer.text}</MenuItem>
            <ToggleTheme />
        </footer>
    )
}

Footer.displayName = 'Footer'

export default Footer
