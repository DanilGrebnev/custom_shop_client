import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import { AppProvider } from '../providers/AppProvider'
import '../styles/global.css'
import '../styles/root-var.css'
import { type ILayout } from '../types/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Custom Shop',
    description: 'Кастомный магазин',
}

const RootLayout = ({ children }: ILayout) => {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <AppProvider>
                    <div id="modal-root"></div>
                    {children}
                </AppProvider>
            </body>
        </html>
    )
}

export default RootLayout
