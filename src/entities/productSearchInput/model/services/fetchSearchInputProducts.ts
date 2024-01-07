import { $axios } from '@/app/API'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProductSearchInputSchema } from '../schema/productSearchInputSchema'
import { SEARCH_PRODUCT_PARAMS_CONSTANTS } from '@/entities/searchProductParams'

type Response = Omit<IProductSearchInputSchema, 'loading' | 'error'>

export const fetchSearchInputProducts = createAsyncThunk(
    'products/fetchSearchInput',
    async (searchString: string) => {
        const response = await $axios.get<Response>(
            `products?${SEARCH_PRODUCT_PARAMS_CONSTANTS.URL_PARAMS_KEY}=` +
                searchString
        )
        response.data.products.map((product) =>
            product.images.map((imageItem) => {
                const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND as string
                const src = backendUrl + imageItem.image

                imageItem.image = src

                return imageItem
            })
        )

        return response.data
    }
)
