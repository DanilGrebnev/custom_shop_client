'use client'

import { useToggleTheme } from '../../model/useToggleTheme'
import clsx from 'clsx'
import s from './ThemeToggler.module.scss'

const ThemeToggler = () => {
    const { theme, toggleTheme } = useToggleTheme()

    return (
        <div
            onClick={toggleTheme}
            className={clsx(s.wrapper, s[theme])}>
            <button
                type="button"
                className={s.toggler}></button>
        </div>
    )
}

export default ThemeToggler
