import { createSlice } from '@reduxjs/toolkit'
import { IBasketSchema } from '../schema/basketSchema'

const initialState: IBasketSchema = {
    basket: null,
    loading: false,
    error: false,
}

const basketSlice = createSlice({
    name: 'basketReducer',
    initialState,
    reducers: {},
})

export const basketReducer = basketSlice.caseReducers
