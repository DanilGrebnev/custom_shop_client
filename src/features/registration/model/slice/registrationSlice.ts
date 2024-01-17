import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRegistrationSchema } from '../schema/registrationSchema'
import { ChangeEvent } from 'react'

const initialState: IRegistrationSchema = {
    fields: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
    },
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationField(
            state,
            action: PayloadAction<ChangeEvent<HTMLInputElement>>
        ) {
            const name = action.payload.target.name as keyof typeof initialState.fields
            const value = action.payload.target.value

            state.fields[name] = value
        },
    },
})

export const registrationReducer = registrationSlice.reducer
