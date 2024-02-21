'use client'

import { SearchButton } from './SearchButton/SearchButton'
import { ProductSearchInput } from '@/entities/productSearchInput'

import s from './SearchWidget.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

interface ISearchWidget extends ComponentPropsWithoutRef<'div'> {}

export const SearchWidget = (props: ISearchWidget) => {
    const { className, ...other } = props
    return (
        <div
            className={clsx(s['search-widget'], className)}
            {...other}>
            <ProductSearchInput />
            <SearchButton />
        </div>
    )
}
