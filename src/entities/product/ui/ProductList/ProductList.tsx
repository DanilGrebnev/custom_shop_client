'use client'

import { useContext } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { ProductListSkeleton } from '@/shared/ui/Skeletons'

import { useGetProductsQuery } from '../../model/api/productApi'
import {
    IContextPreviewProvider,
    PreviewContext,
} from '../../model/provider/PreviewProvider'
import { ProductSelectors } from '../../model/selectors/productSelectors'
import { DynamicProductListHeader } from '../ProductListHeader/DynamicProductListHeader'
import { ProductListPagination } from '../ProductListPagination/ProductListPagination'
import { SettingBtn } from '../SettingBtn'
import s from './ProductList.module.scss'

import { ShopProductCardWidget } from '@/widget/ShopProductCardWidget'
import clsx from 'clsx'
import { v4 } from 'uuid'

export const ProductList = () => {
    const { preview } = useContext(PreviewContext) as IContextPreviewProvider

    const usp = useAppSelector(ProductSelectors.getUsp)

    const { data, isLoading } = useGetProductsQuery(usp)

    // console.log(data)

    return (
        <div
            id="Product_List"
            className={clsx(s['product-list'])}>
            <DynamicProductListHeader />
            <SettingBtn />
            <div className={clsx(s['product-list__content'], s[preview])}>
                {isLoading && <ProductListSkeleton />}

                {data?.products?.map(
                    ({ id, price, images, name, description, quantity }) => {
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
                                quantity={quantity}
                            />
                        )
                    }
                )}
            </div>

            <div className={s.pagination}>
                <ProductListPagination totalCount={data?.totalCount} />
            </div>
        </div>
    )
}

ProductList.displayName = 'ProductList'

export default ProductList
