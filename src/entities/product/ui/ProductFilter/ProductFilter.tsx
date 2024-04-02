'use client'

import { memo, useEffect } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'

import { ProductSelectors, productActions } from '../..'
import { useGetProductFiltersByCategoryIdQuery } from '../../model/api/productApi'
import s from './ProductFilter.module.scss'
import { FilterList } from './components/FilterList/FilterList'

import clsx from 'clsx'

interface IProductFilter {
    className?: string
    categoryId: string
}

export const ProductFilter = memo((props: IProductFilter) => {
    const { categoryId, className } = props

    const actions = useActionCreators(productActions)
    useGetProductFiltersByCategoryIdQuery(categoryId)

    const isOpen = useAppSelector(ProductSelectors.getIsOpenFilter)

    const closeIfEscapeClick = (e: any) => {
        e.code === 'Escape' && actions.toggleOpenSetting(false)
    }

    useEffect(() => {
        document.addEventListener('keydown', closeIfEscapeClick)
        return () => document.removeEventListener('keydown', closeIfEscapeClick)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            className={clsx(
                s.ProductFilter,
                { [s.isOpen]: isOpen },
                className
            )}>
            <FilterList />
        </div>
    )
})

ProductFilter.displayName = 'ProductFilter'
