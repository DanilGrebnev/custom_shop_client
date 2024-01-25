'use client'

import { ILayout } from '@/app/types/layout'
import { useEffect, useState } from 'react'
import { ThemeContext } from '../model/themeContext'
import { TTheme } from '../model/themeContextTypes'

import clsx from 'clsx'
import { ThemeToggler } from '..'

const getTheme = (): TTheme => {
    const th = localStorage.getItem('theme') as TTheme
    return th || 'light'
}

export const ThemeProvider = ({ children }: ILayout) => {
    const [theme, setTheme] = useState<TTheme>(getTheme)

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeToggler />
            <section className={clsx('App', theme)}>{children}</section>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider
