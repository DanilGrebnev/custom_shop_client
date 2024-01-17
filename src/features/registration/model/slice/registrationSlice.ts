import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRegistrationSchema } from '../schema/registrationSchema'

const initialState: IRegistrationSchema = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationField(
            state,
            action: PayloadAction<{
                name: keyof IRegistrationSchema
                value: string
            }>
        ) {
            const name = action.payload.name
            const value = action.payload.value

            state[name] = value
        },
    },
})

export const registrationReducer = registrationSlice.reducer
export const { setRegistrationField } = registrationSlice.actions
