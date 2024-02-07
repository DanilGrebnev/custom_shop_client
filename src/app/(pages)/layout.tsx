import { type Metadata } from 'next'
import { type ILayout } from '../types/layout'
import { Inter } from 'next/font/google'
import { AppProvider } from '../providers/AppProvider'

import '../styles/root-var.css'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Custom Shop',
    description: 'Кастомный магазин',
}

const RootLayout = ({ children }: ILayout) => {
    return (
        <html lang="ru">
            <body
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                }}
                className={inter.className}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    )
}

export default RootLayout
