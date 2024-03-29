import type {
    ILoginFields,
    IUserProfileFields,
    TToggleWishListResponse,
    TUpdateUserProfileBody,
} from '@/app/types/profile'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath: 'api/profile',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND,
        credentials: 'include',
    }),
    tagTypes: ['Profile', 'Unathorized'],
    endpoints: (build) => ({
        getProfile: build.query<IUserProfileFields, void>({
            query: () => 'api/user/me',
            providesTags: ['Profile'],
        }),

        updateProfile: build.mutation<
            any,
            Omit<TUpdateUserProfileBody, 'date_joined'>
        >({
            query: (userBody) => ({
                url: 'api/users/me',
                method: 'PUT',
                body: userBody,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),

            invalidatesTags: ['Profile'],
        }),

        toggleWishList: build.mutation<TToggleWishListResponse, number>({
            query: (productId) => ({
                url: `api/product/favorite/${productId}`,
                method: 'POST',
            }),

            invalidatesTags: (result, error) =>
                error ? ['Unathorized'] : ['Profile'],
        }),

        loginInAccount: build.mutation<void, ILoginFields>({
            query: (body) => ({
                url: 'api/auth/token/login',
                method: 'POST',
                body,
                invalidatesTags: ['Profile'],
            }),
            invalidatesTags: (result, error) =>
                error ? ['Unathorized'] : ['Profile'],
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
    useLazyGetProfileQuery,
    useUpdateProfileMutation,
} = profileApi
