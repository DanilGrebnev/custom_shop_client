'use client'
import { SearchButton } from './SearchButton/SearchButton'
import { ProductSearchInput } from '@/entities/productSearchInput'

import s from './SearchWidget.module.scss'

export const SearchWidget = () => {
    return (
        <div className={s['search-widget']}>
            <ProductSearchInput />
            <SearchButton />
        </div>
    )
}
