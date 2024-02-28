import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiRoutes } from '@/app/providers/apiRoutes/apiRoutes'
import {
    IProduct,
    IProductData,
    type IProductFilterResponse,
} from '@/app/types/product'

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
