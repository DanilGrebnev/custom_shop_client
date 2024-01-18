import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILoginSchema } from '../schema/loginSchema'
import { ILoginFields } from '../schema/loginSchema'

const initialState: ILoginSchema = {
    fields: {
        login: '',
        password: '',
    },
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginValue(
            state,
            action: PayloadAction<{
                name: keyof ILoginFields
                value: string
            }>
        ) {
            state.fields[action.payload.name] = action.payload.value
        },
    },
})

export const loginReducer = loginSlice.reducer
export const { setLoginValue } = loginSlice.actions
