'use client'

import { StoreProvider } from '../StoreProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { FetchingSettingComponent } from '@/entities/settings'
import { ILayout } from '@/app/types/layout'
import { ThemeProvider } from '../ThemeProvider'

export const AppProvider = ({ children }: ILayout) => {
    return (
        <StoreProvider>
            <FetchingSettingComponent>
                <ThemeProvider>
                    <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
                </ThemeProvider>
            </FetchingSettingComponent>
        </StoreProvider>
    )
}
