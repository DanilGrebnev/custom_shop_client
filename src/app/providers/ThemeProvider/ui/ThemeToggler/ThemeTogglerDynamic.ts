import dynamic from 'next/dynamic'

export const ThemeToggler = dynamic(() => import('./ThemeToggler'), {
    ssr: false,
})
