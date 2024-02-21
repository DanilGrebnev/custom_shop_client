import { IHomePageCategory } from '@/app/types/category'
import { IComment } from '@/app/types/comments'
import type { IImage, IProduct } from '@/app/types/product'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IHomePageResponse {
    featureProducts: IProduct[]
    newProducts: IProduct[]
    bestsellerProducts: IProduct[]
    featuredCategories: IHomePageCategory[]
    comments: IComment[]
    sliderImages: IImage[]
}

export const homePageApi = createApi({
    reducerPath: 'api/homePage',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND,
    }),
    endpoints: (build) => ({
        getHomePage: build.query<IHomePageResponse, void>({
            query: () => '/api/home',
        }),
    }),
})

export const { useGetHomePageQuery } = homePageApi
