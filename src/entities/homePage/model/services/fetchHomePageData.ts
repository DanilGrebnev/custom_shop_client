import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'
import { IHomePageSchema } from '../..'

export const fetchHomePageData = createAsyncThunk(
    'homePage/fetchData',
    async () => {
        const response = await $axios.get<IHomePageSchema['homePageData']>(
            'home'
        )

        return response.data
    }
)
