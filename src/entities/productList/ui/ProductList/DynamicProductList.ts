import dynamic from 'next/dynamic'

export const DynamicProductList = dynamic(() => import('./ProductList'), {
    ssr: false,
})
