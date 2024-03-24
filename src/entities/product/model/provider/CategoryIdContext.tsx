'use client'

import { ReactNode, createContext } from 'react'

export const CategoryIdContext = createContext('')

interface Props {
    children?: ReactNode
    categoryId: string
}

export const CategoryIdContextProvider = ({ categoryId, children }: Props) => {
    return (
        <CategoryIdContext.Provider value={categoryId}>
            {children}
        </CategoryIdContext.Provider>
    )
}
