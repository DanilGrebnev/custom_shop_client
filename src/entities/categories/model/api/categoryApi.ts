import { type Categories } from '@/app/types/category'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),

    endpoints: (builder) => ({
        getCategoryById: builder.query<Categories[], string | undefined>({
            query: (categoryId) => {
                if (!categoryId) {
                    /**
                     * Изначально будут загружены категории
                     * в самой верхней иерархии
                     */
                    return `categories?parentId=null`
                }
                return `categories?parentId=${categoryId}`
            },
        }),
        getCategoryByPaerntId: builder.query<Categories[], string>({
            query: (categoryId) => `categories?categoryId=${categoryId}`,
        }),
    }),
})

export const { useGetCategoryByIdQuery } = categoryApi
