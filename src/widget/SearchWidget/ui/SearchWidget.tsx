'use client'

import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { useGetProductsQuery } from '@/entities/product'

import { debounce } from '@/shared/lib/debounce'

import { Input } from './Input/Input'
import { ProductsList } from './ProductsList/ProductsList'
import { SearchButton } from './SearchButton/SearchButton'
import s from './SearchWidget.module.scss'

import clsx from 'clsx'

interface ISearchWidget extends ComponentPropsWithoutRef<'div'> {}

export const SearchWidget = (props: ISearchWidget) => {
    const { className, ...other } = props
    const [state, setState] = useState<string>('')
    const { data } = useGetProductsQuery(state)

    const onChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
        setState('search=' + e.target.value)
    }, 300)

    console.log(data?.products)

    return (
        <div
            className={clsx(s['search-widget'], className)}
            {...other}>
            <Input onChange={onChange} />
            <SearchButton />
            <ProductsList />
        </div>
    )
}
