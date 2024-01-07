'use client'
import { configureStore } from '@reduxjs/toolkit'
import { reducerManager } from './ReducerManeger'

export const createStore = () => {
    const store = configureStore({
        reducer: reducerManager,
    })

    return store
}

export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
