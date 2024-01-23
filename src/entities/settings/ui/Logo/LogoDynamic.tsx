import dynamic from 'next/dynamic'

export const LogoDynamic = dynamic(
    () => import('./Logo'),
    { ssr: false }
)
