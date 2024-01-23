import dynamic from 'next/dynamic'
import { PageLoader } from '@/shared/ui/LoadersSpinners'

export const IsAuthDynamic = dynamic(() => import('./IsAuth'), {
    ssr: false,
    loading: () => <PageLoader />,
})
