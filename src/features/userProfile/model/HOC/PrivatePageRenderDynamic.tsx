import dynamic from 'next/dynamic'
import { PageLoader } from '@/shared/ui/LoadersSpinners'

export const PrivatePageRender = dynamic(() => import('./PrivatePageRender'), {
    ssr: false,
    loading: () => <PageLoader />,
})
