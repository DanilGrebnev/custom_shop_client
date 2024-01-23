import { ReactNode } from 'react'
import { StoreProvider } from '../StoreProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { FetchingSettingComponent } from '@/entities/settings'

interface IAppProvider {
    children: ReactNode
}

export const AppProvider = ({ children }: IAppProvider) => {
    return (
        <StoreProvider>
            <FetchingSettingComponent>
                <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
            </FetchingSettingComponent>
        </StoreProvider>
    )
}
