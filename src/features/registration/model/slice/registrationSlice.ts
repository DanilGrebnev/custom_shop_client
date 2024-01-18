import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    IRegistrationFields,
    IRegistrationSchema,
} from '../schema/registrationSchema'
import { sendRegistrationData } from '../services/sendRegistrationData'
import { AxiosErrorResponse } from '../services/sendRegistrationData'

const initialState: IRegistrationSchema = {
    fields: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
    },
    loading: false,
    error: {},
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationField(
            state,
            action: PayloadAction<{
                name: keyof IRegistrationFields
                value: string
            }>
        ) {
            const name = action.payload.name
            const value = action.payload.value

            state.fields[name] = value
        },
    },

    extraReducers(builder) {
        builder
            .addCase(sendRegistrationData.fulfilled, (state, action) => {
                console.log('action.payload', action.payload)
                state.loading = false
            })
            .addCase(sendRegistrationData.pending, (state) => {
                state.loading = true
            })
            .addCase(sendRegistrationData.rejected, (state, action) => {
                state.error = action.payload
                console.error(action.payload)

                state.loading = false
            })
    },
})

export const registrationReducer = registrationSlice.reducer
export const { setRegistrationField } = registrationSlice.actions
