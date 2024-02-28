import { useContext } from 'react'

import { ThemeContext } from '../model/themeContext'

export const useToggleTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        if (theme === 'light') {
            return setTheme('dark')
        }

        setTheme('light')
    }

    return { theme, toggleTheme }
}
