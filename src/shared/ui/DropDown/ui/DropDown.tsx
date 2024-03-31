'use client'

import { ReactNode, memo, useCallback, useMemo, useState } from 'react'

import ArrowIcon from '@/shared/assets/arrow.svg'

import { useToggleTheme } from '@/app/providers/ThemeProvider'

import s from './DropDown.module.scss'

import clsx from 'clsx'

interface Props {
    label: string
    children?: ReactNode
    className?: string
    title?: string
}

export const DropDown = memo((props: Props) => {
    const { children, label, title, className } = props
    const { theme } = useToggleTheme()
    const [open, setIsOpen] = useState<boolean>(false)

    const openCls = open && s.open

    const toggleOpen = () => {
        setIsOpen(!open)
    }

    return (
        <div className={clsx(s['drop-down'], className)}>
            <button
                onClick={toggleOpen}
                title={title}
                type="button"
                className={clsx(s.button, s[theme])}>
                <ArrowIcon className={clsx(s.icon, openCls)} />
                <p className={clsx(s.label, openCls)}>{label}</p>
            </button>

            <div className={clsx(s['children-wrapper'], openCls)}>
                {children}
            </div>
        </div>
    )
})

DropDown.displayName = 'DropDown'
