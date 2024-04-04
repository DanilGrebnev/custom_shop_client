'use client'

import { type FC } from 'react'

import s from './s.module.scss'

interface ISearchButtonProps {
    className?: string
}

export const SearchButton: FC<ISearchButtonProps> = (props) => {
    const { className } = props

    return <button className={s.button}>Поиск</button>
}

SearchButton.displayName = 'SearchButton'
