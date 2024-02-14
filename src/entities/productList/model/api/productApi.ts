import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiRoutes } from '@/shared/routes/apiRoutes'
import {
    IProduct,
    IProductData,
    type IProductFilterResponse,
} from '@/app/types/Product'
import { addUrlToProductsImages } from '../lib/addUrlToProductsImages'

export const productApi = createApi({
    reducerPath: 'api/product',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND + '/api',
    }),
    tagTypes: ['Product'],

    endpoints: (build) => ({
        getProductFilters: build.query<IProductFilterResponse, void>({
            query: () => ApiRoutes.product.filters,
        }),
        getProducts: build.query<IProductData, string>({
            query: (urlParams: string) => '/products?' + urlParams || '',
            transformResponse: (result: IProductData) => {
                const updatedProducts = addUrlToProductsImages(result.products)
                return {
                    ...result,
                    products: updatedProducts,
                } as IProductData
            },
        }),
        getProductById: build.query<IProduct, string>({
            query: (productId: string) => '/product/' + productId,
            providesTags: ['Product'],
        }),
    }),
})

export const {
    useGetProductFiltersQuery,
    useGetProductsQuery,
    useGetProductByIdQuery,
} = productApi
