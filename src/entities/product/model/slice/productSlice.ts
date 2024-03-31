import { isCheckedFilter } from '@/app/types/product'

import { productApi } from '../..'
import { ToggleChecekd } from '../types/productTypes'
import { type IProductSchema } from '../types/productTypes'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState: IProductSchema = {
    filters: [],
    openFilter: false,
    usp: 'offset=0&limit=5',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setOffset(state, action: PayloadAction<number>) {},
        /**
         * Открывает или закрывает окно настроек для телефона
         */
        toggleOpenSetting(state, action: PayloadAction<boolean>) {
            state.openFilter = action.payload ?? !state.openFilter
        },
        /**
         * Переключение состояния
         */
        toggleChecked(state, action: PayloadAction<ToggleChecekd>) {
            // Переключаем
            state.filters = state.filters.map((filter) => {
                if (isCheckedFilter(filter)) {
                    return {
                        ...filter,
                        choices: filter.choices.map((choice) => {
                            return {
                                ...choice,
                                checked:
                                    action.payload.id === choice.id
                                        ? !choice.checked
                                        : choice.checked,
                            }
                        }),
                    }
                }

                return filter
            })

            const key = action.payload.name
            const value = action.payload.value
            const checked = action.payload.checked
            const params = new URLSearchParams(state.usp)

            if (!checked) {
                state.usp = new URLSearchParams(
                    state.usp.replace(key + '=' + value, '')
                ).toString()

                return
            }

            params.append(key, value)
            state.usp = params.toString()
        },
    },

    extraReducers(builder) {
        builder.addMatcher(
            productApi.endpoints.getProductFiltersByCategoryId.matchFulfilled,

            (state, action) => {
                const updatedFilters = action.payload.map((filter) => {
                    if (isCheckedFilter(filter)) {
                        return {
                            ...filter,
                            choices: filter.choices.map((choice) => {
                                if (filter.type === 'choice') {
                                    return {
                                        ...choice,
                                        checked: false,
                                        checkedId: filter.slug,
                                        id: v4(),
                                    }
                                }
                                if (filter.type === 'multiple_choices') {
                                    return {
                                        ...choice,
                                        checked: false,
                                        id: v4(),
                                    }
                                }
                            }),
                        }
                    }
                })

                state.filters = updatedFilters as any
            }
        )
    },
})

export const { actions: productActions, reducer: productReducer } = productSlice
