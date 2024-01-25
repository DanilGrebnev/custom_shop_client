import dynamic from 'next/dynamic'

export const ThemeProviderDynamic = dynamic(() => import('./ThemeProvider'), {
    ssr: false,
})
