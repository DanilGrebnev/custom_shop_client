import dynamic from 'next/dynamic'

export const PreviewProviderDynamic = dynamic(
    () => import('./PreviewProvider'),
    {
        ssr: false,
    }
)
