import dynamic from 'next/dynamic'

import { ProductListSkeleton } from '@/shared/ui/Skeletons'

export const DynamicProductBlock = dynamic(() => import('./ProductBlock'), {
    ssr: false,
    loading: () => <ProductListSkeleton wrapper={true} />,
})
