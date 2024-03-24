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
            id="Product_List"
            className={clsx(s['product-list'])}>
            <DynamicProductListHeader />
            <SettingBtn />
            <div className={clsx(s['product-list__content'], s[preview])}>
                {isLoading && <ProductListSkeleton />}
                <ProductList
                    preview={preview}
                    productData={data}
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
