import dynamic from 'next/dynamic'

export const DynamicProductListHeader = dynamic(
    () => import('./ProductListHeader'),
    {
        ssr: false,
    }
)
