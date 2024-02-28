'use client'

import { ChangeEvent, type FC, useMemo } from 'react'

import { ProductSelectors } from '@/entities/productList'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Pagination } from '@/shared/ui/Pagination'

import { calculateOffset } from '../model/lib/calculateOffset'
import { calculatePagesAmount } from '../model/lib/calculatePagesAmount'
import { ProductListPaginationSelectors } from '../model/selectors/productListPaginationSelectors'
import './paginations.scss'

interface IProductListPaginationProps {
    className?: string
}

export const ProductListPagination: FC<IProductListPaginationProps> = ({
    className,
}) => {
    const dispatch = useAppDispatch()

    // Количество товаров, которое будет отображаться на странице
    const previewItemsOnPage = useAppSelector(
        ProductListPaginationSelectors.getPreviewItemsOnPage
    )

    const onChange = (event: ChangeEvent<unknown>, pageNumber: number) => {
        const offset = calculateOffset({ pageNumber, previewItemsOnPage })
    }

    return (
        <Pagination
            className={className}
            count={1}
            onChange={onChange}
        />
    )
}

ProductListPagination.displayName = 'ProductListPagination'
