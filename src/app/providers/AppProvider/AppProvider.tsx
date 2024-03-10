'use client'

import { FetchSettingDynamic } from '@/entities/settings'

import { ILayout } from '@/app/types/layout'

import { InitialProvider } from '../InitialProvider'
import { StoreProvider } from '../StoreProvider'
import { ThemeProviderDynamic } from '../ThemeProvider'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

export const AppProvider = ({ children }: ILayout) => {
    return (
        <StoreProvider>
            <InitialProvider>
                <FetchSettingDynamic>
                    <ThemeProviderDynamic>
                        <AppRouterCacheProvider>
                            {children}
                        </AppRouterCacheProvider>
                    </ThemeProviderDynamic>
                </FetchSettingDynamic>
            </InitialProvider>
        </StoreProvider>
    )
}
