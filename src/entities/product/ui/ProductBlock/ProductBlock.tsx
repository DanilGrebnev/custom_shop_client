'use client'

import { useContext } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { ProductListSkeleton } from '@/shared/ui/Skeletons'

import { useGetProductsQuery } from '../../model/api/productApi'
import { CategoryIdContext } from '../../model/provider/CategoryIdContext'
import {
    IContextPreviewProvider,
    PreviewContext,
} from '../../model/provider/PreviewProvider'
import { ProductSelectors } from '../../model/selectors/productSelectors'
import { ProductList } from '../ProductList/ProductList'
import { DynamicProductListHeader } from '../ProductListHeader/DynamicProductListHeader'
import { ProductListPagination } from '../ProductListPagination/ProductListPagination'
import { SettingBtn } from '../SettingBtn'
import s from './ProductList.module.scss'

import clsx from 'clsx'

const ProductBlock = () => {
    const { preview } = useContext(PreviewContext) as IContextPreviewProvider
    const id = useContext(CategoryIdContext)
    const usp = useAppSelector(ProductSelectors.getUsp)

    const { data, isLoading } = useGetProductsQuery(`category_id=${id}&` + usp)

    return (
        <div
            id="Product_block"
            className={clsx(s['product-block'])}>
            <DynamicProductListHeader />
            <SettingBtn />
            <div className={clsx(s['product-list'], s[preview])}>
                {isLoading && <ProductListSkeleton />}
                <ProductList
                    preview={preview}
                    products={data?.products}
                />
            </div>

            <div className={s.pagination}>
                <ProductListPagination totalCount={data?.totalCount} />
            </div>
        </div>
    )
}

ProductBlock.displayName = 'ProductBlock'

export default ProductBlock
