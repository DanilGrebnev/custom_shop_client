import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUserProfileFields } from '../schema/userProfileSchema'

export const profileApi = createApi({
    reducerPath: 'api/profile',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND,
        credentials: 'include',
    }),
    tagTypes: ['Profile'],
    endpoints: (build) => ({
        getProfile: build.query<IUserProfileFields, void>({
            query: () => 'api/user/me',
            providesTags: ['Profile'],
        }),

        toggleWishList: build.mutation<IUserProfileFields, string>({
            query: (productId) => ({
                url: `api/product/favorite/${productId}`,
                method: 'POST',
            }),
            invalidatesTags: ['Profile'],
        }),
        logoutFromAccount: build.mutation({
            query: (arg: void) => ({
                url: 'api/auth/token/logout',
                method: 'POST',
            }),
        }),
        // fetchIsAuth
    }),
})

export const {
    useGetProfileQuery,
    useToggleWishListMutation,
    useLogoutFromAccountMutation,
} = profileApi
