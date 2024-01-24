'use client'

import { ILayout } from '@/app/types/layout'
import { useState } from 'react'
import { ThemeContext } from './themeContext'
import { TTheme } from './themeContextTypes'

import clsx from 'clsx'

export const ThemeProvider = ({ children }: ILayout) => {
    const [theme, setTheme] = useState<TTheme>('light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <section className={clsx('App', theme)}>{children}</section>
        </ThemeContext.Provider>
    )
}
