import { addUrlParams } from '@/shared/lib/addUrlParams'
import { deleteUrlParams } from '@/shared/lib/deleteUrlParams'

import {
    IProductCheckBoxFilter,
    IProductChoiceFilter,
    IProductRangeFilter,
    isChoiceFilter,
    isRangeFilter,
} from '@/app/types/product'

import { productApi } from '../..'
import { isTypeCheckedFilter } from '../lib/isTypeCheckedFilter'
import { isTypeRangeFilter } from '../lib/isTypeRangeFilter'
import { updateUsp } from '../lib/updateUsp'
import {
    type ICheckedFilters,
    type IProductSchema,
    type IRangeFilters,
} from '../types/productListTypes'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IProductSchema = {
    filters: [],
    usp: 'offset=0&limit=8',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        initialCreateFilter(
            state,
            action: PayloadAction<ICheckedFilters | IRangeFilters>
        ) {
            state.filters.push(action.payload)
        },

        changeCheckedValue(
            state,
            action: PayloadAction<{ id: string | number; checked: boolean }>
        ) {
            const { id, checked } = action.payload

            for (let filter of state.filters) {
                if (!isTypeCheckedFilter(filter) || filter.id !== id) continue

                filter.checked = checked

                if (filter.checked) {
                    state.usp = addUrlParams({
                        key: filter.key,
                        value: filter.value,
                        usp: state.usp,
                    })
                    break
                }

                state.usp = deleteUrlParams({
                    filter: filter.key + '=' + filter.value,
                    usp: state.usp,
                })
                break
            }
        },

        changeRangeValue(
            state,
            action: PayloadAction<{
                id: string
                name: string
                value: string
            }>
        ) {
            const { id, name, value } = action.payload

            for (let filter of state.filters) {
                if (id !== filter.id || !isTypeRangeFilter(filter)) continue

                if (name === filter.key1) {
                    filter.value1 = value
                    state.usp = updateUsp(name, filter.value1, state.usp)
                    break
                }

                filter.value2 = value
                state.usp = updateUsp(name, filter.value2, state.usp)
                break
            }
        },

        resetAllFilters(state) {
            for (let filter of state.filters) {
                if (isTypeCheckedFilter(filter)) {
                    filter.checked = false
                    continue
                }

                filter.value1 = ''
                filter.value2 = ''
            }

            state.usp = 'offset=0&limit=8'
        },

        setOffset(state, action: PayloadAction<number>) {
            const usp = new URLSearchParams(state.usp)
            usp.set('offset', action.payload + '')
            state.usp = usp.toString()
        },

        setUrlSearchParams(state, action: PayloadAction<string>) {
            state.usp = action.payload
        },
    },

    extraReducers(builder) {
        builder.addMatcher(
            productApi.endpoints.getProductFilters.matchFulfilled,

            (state, action) => {
                let checkedFilters = [] as (ICheckedFilters | IRangeFilters)[]

                action.payload.filters.forEach((filter) => {
                    // Работы с фильтрами типа checked
                    if (isChoiceFilter(filter)) {
                        if (filter.code === 'category') {
                            checkedFilters = checkedFilters.concat(
                                createCheckedFilters(filter.choices)
                            )
                        }

                        if (filter.code === 'rating') {
                            checkedFilters = checkedFilters.concat(
                                returnCheckedObject(filter.choices, 'rating')
                            )
                        }

                        if (filter.code === 'color') {
                            checkedFilters = checkedFilters.concat(
                                returnCheckedObject(filter.choices, 'color')
                            )
                        }
                    }
                    
                    // Если фильтр типа Range
                    if (isRangeFilter(filter)) {
                        const o: IRangeFilters = {
                            id: filter.label,
                            value1: '',
                            value2: '',
                            key1: filter.code + '_min',
                            key2: filter.code + '_max',
                            label_max: filter.max_value,
                            label_min: filter.min_value,
                        }

                        checkedFilters.push(o)
                    }
                })

                state.filters = checkedFilters
            }
        )
    },
})

function createCheckedFilters(choices: IProductChoiceFilter[]) {
    let filtersResult = [] as ICheckedFilters[]

    choices.forEach((choice) => {
        const o = {} as ICheckedFilters

        o.checked = false
        o.id = choice.label
        o.key = choice.code
        o.value = choice.value
        o.label = choice.label

        filtersResult.push(o)

        if (!choice.children) return

        filtersResult = filtersResult.concat(
            createCheckedFilters(choice.children)
        )
    })

    return filtersResult
}

/**
 * Функция для создания объекта фильтра с возможностью указания
 * ключа key
 */
function returnCheckedObject(
    choices: IProductChoiceFilter[],
    key: string
): ICheckedFilters[] {
    return choices.map((choice) => {
        const o = {} as ICheckedFilters

        o.checked = false
        o.id = choice.label
        o.key = key
        o.value = choice.value
        o.label = choice.label

        return o
    })
}

// function createCheckedFilters(
//     checkedFilters: ICheckedFilters[],
//     choices: IProductChoiceFilter[]
// ) {
//     choices.forEach((choice) => {
//         const o = {} as ICheckedFilters

//         o.checked = false
//         o.id = choice.label
//         o.key = choice.code
//         o.value = choice.value

//         checkedFilters.push(o)

//         if (choice.children) {
//             createCheckedFilters(checkedFilters, choice.children)
//         }
//     })
// }

export const { actions: productActions, reducer: productReducer } = productSlice
