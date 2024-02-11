'use client'

import { useContext, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { fetchProductList } from '../../model/services/productListServices'
import { ProductListSelectors } from '../../model/selectors/productListSelectors'
import { ProductListPagination } from '@/entities/productListPagination'
import { ProductListSkeleton } from '@/shared/ui/Skeletons'
import { getSearchProductParams } from '@/entities/searchProductParams'
import { productSearchInputActions } from '@/entities/productSearchInput'
import { ProductListHeader } from '../ProductListHeader/ProductListHeader'
import { ShopProductCardWidget } from '@/widget/ShopProductCardWidget'

import {
    IContextPreviewProvider,
    PreviewContext,
} from '../../model/provider/PreviewProvider'

import clsx from 'clsx'
import s from './ProductList.module.scss'

export const ProductList = () => {
    const { preview } = useContext(PreviewContext) as IContextPreviewProvider

    const dispatch = useAppDispatch()
    const products = useAppSelector(ProductListSelectors.getProducts)
    const isLoading = useAppSelector(ProductListSelectors.getIsLoading)

    const usp = useAppSelector(getSearchProductParams)

    useEffect(() => {
        dispatch(productSearchInputActions.isHiddenSearchList(true))

        return () => {
            dispatch(productSearchInputActions.isHiddenSearchList(false))
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchProductList({ offset: 0 }))
    }, [usp, dispatch])

    return (
        <div
            id="Product_List"
            className={clsx(s['product-list'])}>
            <ProductListHeader />
            <div className={clsx(s['product-list__content'], s[preview])}>
                {isLoading && <ProductListSkeleton />}

                {products?.map(({ id, price, images, name, description }) => {
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
                })}
            </div>
            <div className={s.pagination}>
                <ProductListPagination />
            </div>
        </div>
    )
}

ProductList.displayName = 'ProductList'

export default ProductList
