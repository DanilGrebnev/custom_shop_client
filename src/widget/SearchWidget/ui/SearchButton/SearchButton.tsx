'use client'

import { type FC } from 'react'

import { useRouter } from 'next/navigation'

import { ProductSearchInputState } from '@/entities/productSearchInput'

import { useAppSelector } from '@/shared/hooks'

import s from './s.module.scss'

interface ISearchButtonProps {
    className?: string
}

export const SearchButton: FC<ISearchButtonProps> = (props) => {
    const { className } = props

    const router = useRouter()
    const searchInput = useAppSelector(ProductSearchInputState.getInput)

    const onClick = () => {
        if (!searchInput.trim()) return
        router.push('/shop')
    }

    return (
        <button
            onClick={onClick}
            className={s.button}>
            Поиск
        </button>
    )
}

SearchButton.displayName = 'SearchButton'
