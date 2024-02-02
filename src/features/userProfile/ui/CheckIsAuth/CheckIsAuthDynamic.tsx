import dynamic from 'next/dynamic'

export const CheckIsAuth = dynamic(() => import('./CheckIsAuth'), {
    ssr: false,
})
