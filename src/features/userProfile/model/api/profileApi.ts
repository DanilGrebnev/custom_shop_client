import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUserProfileFields } from '../schema/userProfileSchema'
import { ILoginFields } from '../schema/userProfileSchema'

export const profileApi = createApi({
    reducerPath: 'api/profile',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND,
        credentials: 'include',
    }),
    tagTypes: ['Profile', 'WishList'],
    endpoints: (build) => ({
        getProfile: build.query<IUserProfileFields, void>({
            query: () => 'api/user/me',
            providesTags: ['Profile'],
        }),
        toggleWishList: build.mutation<IUserProfileFields, number>({
            query: (productId) => ({
                url: `api/product/favorite/${productId}`,
                method: 'POST',
            }),
            invalidatesTags: ['Profile', 'WishList'],
        }),
        loginInAccount: build.mutation<void, ILoginFields>({
            query: (body) => ({
                url: 'api/auth/token/login',
                method: 'POST',
                body,
                invalidatesTags: ['Profile'],
            }),
            invalidatesTags: ['Profile'],
        }),
        logoutFromAccount: build.mutation({
            query: (arg: void) => ({
                url: 'api/auth/token/logout',
                method: 'POST',
            }),
            invalidatesTags: ['Profile'],
        }),
    }),
})

export const {
    useGetProfileQuery,
    useToggleWishListMutation,
    useLogoutFromAccountMutation,
    useLoginInAccountMutation,
} = profileApi
