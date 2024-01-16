import dynamic from 'next/dynamic'
import { CategoryMenuWidgetSkeleton } from '@/shared/ui/Skeletons'

export const CategoryMenuWidgetLazy = dynamic(
    () => import('./CategoryMenuWidget'),
    {
        loading: () => <CategoryMenuWidgetSkeleton />,
        ssr: false,
    }
)
