import { createContext } from 'react'
import { ICreateContext } from './themeContextTypes'

export const ThemeContext = createContext<ICreateContext>({
    theme: 'light',
    setTheme: () => {},
})
