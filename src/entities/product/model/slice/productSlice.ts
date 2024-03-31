import { isCheckedFilter } from '@/app/types/product'

import { productApi } from '../..'
import { ToggleChecekd } from '../types/productTypes'
import { type IProductSchema } from '../types/productTypes'
import { defaultFilters } from './defaultFilters'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState: IProductSchema = {
    filters: [],
    openFilter: false,
    usp: '',
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
         * Переключение состояния checkbox фильтра
         */
        toggleChecked(state, action: PayloadAction<ToggleChecekd>) {
            for (const filter of state.filters) {
                if (filter.slug !== action.payload.slug) continue
                if (!isCheckedFilter(filter)) continue

                const { choices, type } = filter

                for (const choice of choices) {
                    if (type === 'choice') {
                        choice.id === action.payload.id
                            ? (choice.checked = !choice.checked)
                            : (choice.checked = false)
                    }

                    if (type === 'multiple_choices') {
                        if (choice.id !== action.payload.id) continue
                        choice.checked = !choice.checked
                    }
                }
            }

            const params = new URLSearchParams()

            for (const filter of state.filters) {
                if (!isCheckedFilter(filter)) continue
                for (const choice of filter.choices) {
                    if (choice.checked) {
                        params.append(choice.slug, choice.value)
                        continue
                    }
                }
            }

            state.usp = params.toString()
        },
    },

    extraReducers(builder) {
        builder.addMatcher(
            productApi.endpoints.getProductFiltersByCategoryId.matchFulfilled,

            (state, action) => {
                const filters = [...action.payload, ...defaultFilters]

                const updatedFilters = filters.map((filter) => {
                    if (isCheckedFilter(filter)) {
                        return {
                            ...filter,
                            choices: filter.choices.map((choice) => ({
                                ...choice,
                                slug: filter.slug,
                                checked: false,
                                id: v4(),
                            })),
                        }
                    }
                })

                state.filters = updatedFilters as any
            }
        )
    },
})

export const { actions: productActions, reducer: productReducer } = productSlice
