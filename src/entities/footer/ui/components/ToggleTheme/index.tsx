'use client'

import { ThemeToggler } from '@/app/providers/ThemeProvider'
import s from './s.module.scss'
import { useToggleTheme } from '@/app/providers/ThemeProvider'

export const ToggleTheme = () => {
    const { theme } = useToggleTheme()

    return (
        <div className={s.theme}>
            <p>Тема приложения</p>
            <ThemeToggler />
            <p>{theme === 'light' ? 'Светлая' : 'Тёмная'}</p>
        </div>
    )
}
