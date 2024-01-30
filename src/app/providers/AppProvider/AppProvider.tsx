'use client'

import { StoreProvider } from '../StoreProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ILayout } from '@/app/types/layout'
import { ThemeProviderDynamic } from '../ThemeProvider'
import { FetchSettingDynamic } from '@/entities/settings'
import { ReactQueryProvider } from '../ReactQueryProvider/ReactQueryProvider'
import { InitialProvider } from '../InitialProvider/InitialProvider'

export const AppProvider = ({ children }: ILayout) => {
    return (
        <StoreProvider>
            <InitialProvider>
                <ReactQueryProvider>
                    <FetchSettingDynamic>
                        <ThemeProviderDynamic>
                            <AppRouterCacheProvider>
                                {children}
                            </AppRouterCacheProvider>
                        </ThemeProviderDynamic>
                    </FetchSettingDynamic>
                </ReactQueryProvider>
            </InitialProvider>
        </StoreProvider>
    )
}
