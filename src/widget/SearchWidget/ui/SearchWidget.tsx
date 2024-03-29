'use client'

import { ComponentPropsWithoutRef } from 'react'

import { ProductSearchInput } from '@/entities/productSearchInput'

import { SearchButton } from './SearchButton/SearchButton'
import s from './SearchWidget.module.scss'

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
