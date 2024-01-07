'use client'

import { type FC } from 'react'
import { Button } from '@/shared/ui/Button'
import { useRouter } from 'next/navigation'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import {
    ProductSearchInputState,
    toggleVisibleSearchList,
} from '@/entities/productSearchInput'

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

    return (
        <Button
            onClick={onClick}
            className={className}
            borderRadius="right">
            Search
        </Button>
    )
}

SearchButton.displayName = 'SearchButton'
