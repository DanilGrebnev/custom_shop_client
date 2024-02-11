import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ISetting {
    id: 2
    color: string
    homeLogo: string
    currency: string
    isActive: boolean
}

export const settingApi = createApi({
    reducerPath: 'api/settings',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_URL_BACKEND }),
    endpoints: (builder) => ({
        getSettings: builder.query<ISetting, void>({
            query: () => `/api/settings`,
        }),
    }),
})

export const { useGetSettingsQuery } = settingApi
