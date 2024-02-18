import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICart } from '@/app/types/basket'

export const basketApi = createApi({
    reducerPath: 'api/basket',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND,
        credentials: 'include',
    }),

    endpoints: (builder) => ({
        // ! В дальнейшем ICart должен быть заменен на ICartResponse со следующими полями:
        getCart: builder.query<ICart[], void>({
            query: () => `/api/cart`,
        }),

        toggleProductAmount: builder.mutation({
            query: () => `/api/cart/update`,
        }),
    }),
})

export const { useGetCartQuery } = basketApi
