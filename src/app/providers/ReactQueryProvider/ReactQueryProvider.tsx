'use client'

import { ILayout } from '@/app/types/layout'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export const ReactQueryProvider = ({ children }: ILayout) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
