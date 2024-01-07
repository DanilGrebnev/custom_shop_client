'use client'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { createStore, AppStore } from '../config/storeConfig'

interface IStoreProvider {
    children: ReactNode
}

export const StoreProvider = ({ children }: IStoreProvider) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = createStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}


