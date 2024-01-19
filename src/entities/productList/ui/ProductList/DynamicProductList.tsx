import dynamic from 'next/dynamic'
import { ProductListSkeleton } from '@/shared/ui/Skeletons'

export const DynamicProductList = dynamic(() => import('./ProductList'), {
    ssr: false,
    loading: () => <ProductListSkeleton wrapper={true} />,
})
