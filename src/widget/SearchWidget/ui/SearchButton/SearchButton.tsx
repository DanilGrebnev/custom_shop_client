'use client'

import { type FC } from 'react'
import { useRouter } from 'next/navigation'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import {
    ProductSearchInputState,
    toggleVisibleSearchList,
} from '@/entities/productSearchInput'
import s from './s.module.scss'

interface ISearchButtonProps {
    className?: string
}

export const SearchButton: FC<ISearchButtonProps> = (props) => {
    const { className } = props

    const router = useRouter()
    const searchInput = useAppSelector(ProductSearchInputState.getInput)
    const dispatch = useAppDispatch()

    const onClick = () => {
        if (!searchInput.trim()) return
        router.push('/shop')
        dispatch(toggleVisibleSearchList(false))
    }

    return <button className={s.button}>Поиск</button>
}

SearchButton.displayName = 'SearchButton'
