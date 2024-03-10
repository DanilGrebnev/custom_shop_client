import { ICart, IDeleteProductFromBasket } from '@/app/types/basket'
import { IProductInBasket } from '@/app/types/basket'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const basketApi = createApi({
    reducerPath: 'api/basket',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND,
        credentials: 'include',
    }),
    tagTypes: ['Basket'],

    endpoints: (builder) => ({
        getCart: builder.query<ICart, void>({
            query: () => `/api/cart`,
            providesTags: ['Basket'],
        }),

        toggleProductAmount: builder.mutation({
            query: () => `/api/cart/update`,
        }),

        addProductInBasketById: builder.mutation<void, IProductInBasket>({
            query: (body) => ({
                url: '/api/cart/create',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Basket'],
        }),

        deleteProductFromBasketById: builder.mutation<
            void,
            IDeleteProductFromBasket
        >({
            query: (id: number) => ({
                url: `/api/cart/delete?id=${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Basket'],
        }),
    }),
})

export const {
    useGetCartQuery,
    useDeleteProductFromBasketByIdMutation,
    useAddProductInBasketByIdMutation,
} = basketApi
