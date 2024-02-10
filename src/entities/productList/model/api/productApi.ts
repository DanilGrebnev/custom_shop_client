import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiRoutes } from '@/shared/routes/apiRoutes'
import { type IProductFilterResponse } from '@/app/types/Product'

export const productApi = createApi({
    reducerPath: 'api/product',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND + '/api',
    }),

    endpoints: (build) => ({
        getProductFilters: build.query<IProductFilterResponse, void>({
            query: () => ApiRoutes.product.filters,
        }),
        getProducts: build.query({
            query: (urlParams: string) => 'products?' + urlParams,
        }),
    }),
})

export const { useGetProductFiltersQuery, useGetProductsQuery } = productApi
