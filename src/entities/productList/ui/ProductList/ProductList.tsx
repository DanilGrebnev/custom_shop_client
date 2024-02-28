'use client'

import { useContext, useEffect } from 'react'

import { ProductListPagination } from '@/entities/productListPagination'

import { useAppSelector } from '@/shared/hooks'
import { ProductListSkeleton } from '@/shared/ui/Skeletons'

import { ProductSelectors } from '../..'
import { useGetProductsQuery } from '../../model/api/productApi'
import { useCreateUrlSearchParams } from '../../model/hooks/useCreateUrlSearchParams'
import {
    IContextPreviewProvider,
    PreviewContext,
} from '../../model/provider/PreviewProvider'
import { DynamicProductListHeader } from '../ProductListHeader/DynamicProductListHeader'
import s from './ProductList.module.scss'

import { ShopProductCardWidget } from '@/widget/ShopProductCardWidget'
import clsx from 'clsx'
import { v4 } from 'uuid'

export const ProductList = () => {
    const { preview } = useContext(PreviewContext) as IContextPreviewProvider

    const usp = useAppSelector(ProductSelectors.getUsp)

    const { data: productResponse, isLoading } = useGetProductsQuery(usp)

    useEffect(() => {
        // console.clear()
        // console.log('search params:', usp)
        // console.log(productResponse?.products)
    }, [productResponse, usp])

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
                                key={v4()}
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
