'use client'
import { configureStore } from '@reduxjs/toolkit'
import { staticReducers } from './ReducerManeger'
import { RTKQueryMiddlewares } from './RTKQueryMiddlewares'

export const createStore = () => {
    const store = configureStore({
        reducer: staticReducers,
        middleware: (getDefaulMiddleware) =>
            getDefaulMiddleware().concat(...RTKQueryMiddlewares),
    })

    return store
}

export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
