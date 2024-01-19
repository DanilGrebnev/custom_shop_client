import { FilterSideBarSkeleton } from '@/shared/ui/Skeletons'
import dynamic from 'next/dynamic'

export const FilterSideBarDynamic = dynamic(() => import('./FilterSideBar'), {
    ssr: false,
    loading: () => <FilterSideBarSkeleton />,
})
