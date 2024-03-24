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
        getProductFiltersByCategoryId: build.query<
            IProductFilterResponse,
            string
        >({
            query: (categoryId) => `filters?category_id=${categoryId}`,
        }),
        getProductById: build.query<IProduct, number>({
            query: (productId: number) => '/product/' + productId,
            providesTags: ['Product'],
        }),
    }),
})

export const {
    useGetProductFiltersByCategoryIdQuery,
    useGetProductsQuery,
    useGetProductByIdQuery,
} = productApi
