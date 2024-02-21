import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICart } from '@/app/types/basket'

interface IProductUpdate {
    quantity: number
    product: number
}

export const basketApi = createApi({
    reducerPath: 'api/basket',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND,
        credentials: 'include',
    }),
    tagTypes: ['Basket'],

    endpoints: (builder) => ({
        // ! В дальнейшем ICart должен быть заменен на ICartResponse со следующими полями:
        getCart: builder.query<ICart[], void>({
            query: () => `/api/cart`,
            providesTags: ['Basket'],
        }),

        toggleProductAmount: builder.mutation({
            query: () => `/api/cart/update`,
        }),
        addProductInBasketById: builder.mutation<void, IProductUpdate>({
            query: (body) => ({
                url: '/api/cart/create',
                method: 'POST',
                body: {
                    cart_item: body,
                },
            }),
            invalidatesTags: ['Basket'],
        }),
        deleteProductFromBasketById: builder.mutation<void, IProductUpdate>({
            query: (body) => ({
                url: '/api/cart/update',
                method: 'PUT',
                body,
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
