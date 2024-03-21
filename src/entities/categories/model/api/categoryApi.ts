import type {
    Categories,
    CategoryWithChildren,
    ChildrenCategory,
} from '@/app/types/category'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND!,
    }),

    endpoints: (builder) => ({
        getCategoryByParentId: builder.query<
            ChildrenCategory[],
            string | undefined
        >({
            query: (categoryId) => `api/children_categories/${categoryId}`,
        }),
        getAllCategories: builder.query<CategoryWithChildren[], void>({
            query: () => 'api/categories',
        }),
    }),
})

export const { useGetCategoryByParentIdQuery, useGetAllCategoriesQuery } =
    categoryApi
