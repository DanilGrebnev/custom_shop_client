import { isChoiceFilter, isRangeFilter } from '@/app/types/product'

import { productApi } from '../..'
import type { ChangeRange, ToggleChecekd } from '../types/productTypes'
import { type ProductSchema } from '../types/productTypes'
import { defaultFilters } from './defaultFilters'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState: ProductSchema = {
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
                if (!isChoiceFilter(filter)) continue

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

            for (const filter of state.filters) {
                if (!isChoiceFilter(filter)) continue

                for (const choice of filter.choices) {
                    const param = `${choice.slug}=${choice.value}`

                    if (choice.checked) {
                        if (state.usp.includes(param)) continue
                        const params = new URLSearchParams(state.usp)
                        params.append(choice.slug, choice.value)
                        state.usp = params.toString()
                        continue
                    }

                    if (!choice.checked) {
                        if (!state.usp.includes(param)) continue
                        const prevParamsString = new URLSearchParams(
                            state.usp
                        ).toString()

                        const params = new URLSearchParams(
                            prevParamsString.replace(param, '')
                        ).toString()
                        state.usp = params
                        continue
                    }
                }
            }
        },

        changeRangeValue(state, action: PayloadAction<ChangeRange>) {
            for (const filter of state.filters) {
                const { id, name, value } = action.payload
                if (!isRangeFilter(filter)) continue
                if (id !== filter.id) continue

                const params = new URLSearchParams(state.usp)

                filter.range[name] = value

                if (!filter.range[name]) {
                    if (!params.has(name)) return
                    params.delete(name)

                    state.usp = params.toString()
                    return
                }

                params.set(name, value)
                state.usp = params.toString()
            }
        },
    },

    extraReducers(builder) {
        builder.addMatcher(
            productApi.endpoints.getProductFiltersByCategoryId.matchFulfilled,

            (state, action) => {
                const filters = [...action.payload, ...defaultFilters]

                const updatedFilters = filters.map((filter) => {
                    if (isChoiceFilter(filter)) {
                        return {
                            ...filter,
                            choices: filter?.choices?.map((choice) => ({
                                ...choice,
                                slug: filter.slug,
                                checked: false,
                                id: v4(),
                            })),
                        }
                    }

                    if (isRangeFilter(filter)) {
                        return filter
                    }
                })

                state.filters = updatedFilters as any
            }
        )
    },
})

export const { actions: productActions, reducer: productReducer } = productSlice
