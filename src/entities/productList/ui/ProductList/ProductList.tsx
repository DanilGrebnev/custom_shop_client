'use client'

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/hooks'
import { fetchProductList } from '../../model/services/productListServices'
import { ProductCard } from '@/shared/ui/Cards'
import { ProductListSelectors } from '../../model/selectors/productListSelectors'
import { ProductListPagination } from '@/entities/productListPagination'
import { ProductListSkeleton } from '@/shared/ui/Skeletons'
import { getSearchProductParams } from '@/entities/searchProductParams'

import clsx from 'clsx'
import s from './ProductList.module.scss'

const ProductList = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(ProductListSelectors.getProducts)
    const isLoading = useAppSelector(ProductListSelectors.getIsLoading)

    const usp = useAppSelector(getSearchProductParams)

    useEffect(() => {
        dispatch(fetchProductList({ offset: 0 }))
    }, [usp, dispatch])

    return (
        <div
            id="Product_List"
            className={clsx(s['product-list'])}>
            <div
                className={clsx(s['product-list__content'], s.cell, {
                    // [s.cell]: previewType === ProductListPreviewType.CELL,
                    // [s.list]: previewType === ProductListPreviewType.LIST,
                })}>
                {isLoading && <ProductListSkeleton />}

                {products?.map(({ id, price, images, name, description }) => {
                    return (
                        <ProductCard
                            type={'cell'}
                            key={id}
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
            <ProductListPagination />
        </div>
    )
}

ProductList.displayName = 'ProductList'

export default ProductList
