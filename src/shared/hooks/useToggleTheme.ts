import { ThemeContext } from '@/app/providers/ThemeProvider'
import { useContext } from 'react'

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
