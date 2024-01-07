import { $axios } from '@/app/API'
import { IProductListSchema } from '../types/productListTypes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'

export const fetchProductList = createAsyncThunk(
    'product/fetchProductList',
    async ({ offset }: { offset: number }, thunkAPI) => {
        const state = thunkAPI.getState() as StateSchema

        const usp = new URLSearchParams(state.searchProductParams.usp)

        usp.set('offset', String(offset))
        usp.set('limit', String(state.productListPagination.previewItemsOnPage))

        const response = await $axios.get<IProductListSchema>(
            'products?' + usp.toString()
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
