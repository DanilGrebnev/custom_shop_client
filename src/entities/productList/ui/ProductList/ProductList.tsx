'use client'

import { useContext } from 'react'
import { useAppSelector } from '@/shared/hooks'
import { ProductListPagination } from '@/entities/productListPagination'
import { ProductListSkeleton } from '@/shared/ui/Skeletons'
import { getSearchProductParams } from '@/entities/searchProductParams'
import { ShopProductCardWidget } from '@/widget/ShopProductCardWidget'
import { useGetProductsQuery } from '../../model/api/productApi'

import {
    IContextPreviewProvider,
    PreviewContext,
} from '../../model/provider/PreviewProvider'

import clsx from 'clsx'
import s from './ProductList.module.scss'
import { DynamicProductList } from './DynamicProductList'
import { DynamicProductListHeader } from '../ProductListHeader/DynamicProductListHeader'

export const ProductList = () => {
    const { preview } = useContext(PreviewContext) as IContextPreviewProvider

    const usp = useAppSelector(getSearchProductParams)

    const { data: productResponse, isLoading } = useGetProductsQuery(usp)

    return (
        <div
            id="Product_List"
            className={clsx(s['product-list'])}>
            <DynamicProductListHeader />
            <div className={clsx(s['product-list__content'], s[preview])}>
                {isLoading && <ProductListSkeleton />}

                {productResponse?.products?.map(
                    ({ id, price, images, name, description }) => {
                        return (
                            <ShopProductCardWidget
                                key={id}
                                type={preview}
                                productId={id}
                                rating={3}
                                images={images}
                                name={name}
                                price={price}
                                description={description}
                            />
                        )
                    }
                )}
            </div>
            <div className={s.pagination}>
                <ProductListPagination />
            </div>
        </div>
    )
}

ProductList.displayName = 'ProductList'

export default ProductList
