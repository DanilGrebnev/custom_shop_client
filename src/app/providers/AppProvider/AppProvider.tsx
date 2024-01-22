import { ReactNode } from 'react'
import { StoreProvider } from '../StoreProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

interface IAppProvider {
    children: ReactNode
}

export const AppProvider = ({ children }: IAppProvider) => {
    return (
        <StoreProvider>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </StoreProvider>
    )
}
