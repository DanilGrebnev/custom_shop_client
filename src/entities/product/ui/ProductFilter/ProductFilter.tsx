'use client'

import { MouseEvent, memo, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { useActionCreators } from '@/shared/hooks/useActionCreators'

import { ProductSelectors, productActions } from '../..'
import { useGetProductFiltersByCategoryIdQuery } from '../../model/api/productApi'
import { ActiveFilterListMobile } from '../ActiveFilterListMobile'
import s from './ProductFilter.module.scss'

import clsx from 'clsx'

interface IProductFilter {
    className?: string
    categoryId: string
}

export const ProductFilter = memo((props: IProductFilter) => {
    const { categoryId, className } = props
    const actions = useActionCreators(productActions)

    const { data } = useGetProductFiltersByCategoryIdQuery(categoryId)
    console.log(data)
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
            <ActiveFilterListMobile />
        </div>
    )
})

ProductFilter.displayName = 'ProductFilter'
