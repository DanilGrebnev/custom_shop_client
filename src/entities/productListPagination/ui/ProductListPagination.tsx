'use client'

import { type FC, useMemo, ChangeEvent } from 'react'
import { Pagination } from '@/shared/ui/Pagination'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { ProductListSelectors } from '@/entities/productList'
import { fetchProductList } from '@/entities/productList'
import { calculatePagesAmount } from '../model/lib/calculatePagesAmount'
import { calculateOffset } from '../model/lib/calculateOffset'
import { ProductListPaginationSelectors } from '../model/selectors/productListPaginationSelectors'

import './paginations.scss'

interface IProductListPaginationProps {
    className?: string
}

export const ProductListPagination: FC<IProductListPaginationProps> = ({
    className,
}) => {
    const dispatch = useAppDispatch()

    // productsAmount - Количество товаров, находящееся в productList
    const productsAmount = useAppSelector(ProductListSelectors.getTotalCount)

    // Количество товаров, которое будет отображаться на странице
    const previewItemsOnPage = useAppSelector(
        ProductListPaginationSelectors.getPreviewItemsOnPage
    )

    const onChange = (event: ChangeEvent<unknown>, pageNumber: number) => {
        const offset = calculateOffset({ pageNumber, previewItemsOnPage })

        dispatch(fetchProductList({ offset }))
    }

    const pagesAmount = useMemo(() => {
        return calculatePagesAmount({
            previewItemsOnPage,
            productsAmount,
        })
    }, [productsAmount, previewItemsOnPage])

    return (
        <Pagination
            className={className}
            count={pagesAmount}
            onChange={onChange}
        />
    )
}

ProductListPagination.displayName = 'ProductListPagination'
