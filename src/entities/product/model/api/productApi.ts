import { ApiRoutes } from '@/app/providers/apiRoutes/apiRoutes'
import {
    IProduct,
    IProductData,
    type IProductFilterResponse,
} from '@/app/types/product'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'api/product',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND + '/api',
    }),
    tagTypes: ['Product'],

    endpoints: (build) => ({
        getProducts: build.query<IProductData, string>({
            query: (urlParams: string) => '/products?' + urlParams || '',
        }),
        getProductFilters: build.query<IProductFilterResponse, void>({
            query: () => ApiRoutes.product.filters,
        }),
        getProductById: build.query<IProduct, number>({
            query: (productId: number) => '/product/' + productId,
            providesTags: ['Product'],
        }),
    }),
})

export const {
    useGetProductFiltersQuery,
    useGetProductsQuery,
    useGetProductByIdQuery,
} = productApi
