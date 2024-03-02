'use client'

import { useActionCreators } from '@/shared/hooks/useActionCreators'
import { Pagination } from '@/shared/ui/Pagination'

import { calculateOffset } from '../../model/lib/calculateOffset'
import { calculatePagesAmount } from '../../model/lib/calculatePagesAmount'
import { productActions } from '../../model/slice/productSlice'
import './paginations.scss'

interface IProps {
    totalCount?: number
}

export const ProductListPagination = (props: IProps) => {
    const { totalCount = 0 } = props
    const actions = useActionCreators(productActions)
    const previewItemsOnPage = 8

    const pagesAmount = calculatePagesAmount({
        previewItemsOnPage: previewItemsOnPage,
        productsAmount: totalCount,
    })

    const onChange = (_: any, pageNumber: number) => {
        const offset = calculateOffset({ pageNumber, previewItemsOnPage })
        actions.setOffset(offset)
    }

    return (
        <Pagination
            onChange={onChange}
            count={pagesAmount}
        />
    )
}
