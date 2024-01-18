import type { Metadata } from 'next'
import { type ILayout } from '../types/layout'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { StoreProvider } from '../providers/StoreProvider'

import '../styles/root-var.css'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Custom Shop',
    description: 'Кастомный магазин',
}

const RootLayout = ({ children }: ILayout) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <AppRouterCacheProvider>
                        <form id="App">{children}</form>
                    </AppRouterCacheProvider>
                </StoreProvider>
            </body>
        </html>
    )
}

export default RootLayout
