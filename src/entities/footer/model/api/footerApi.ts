import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IFooter {
    id: 0
    text: string
    contact: string
    address: string
    email: string
}

export const footerApi = createApi({
    reducerPath: 'api/footer',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND,
    }),
    endpoints: (build) => ({
        getFooter: build.query<IFooter, void>({
            query: () => '/api/footer',
        }),
    }),
})

export const { useGetFooterQuery } = footerApi
