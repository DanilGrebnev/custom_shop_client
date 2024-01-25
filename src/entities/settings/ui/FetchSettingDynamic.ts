import dynamic from 'next/dynamic'

export const FetchSettingDynamic = dynamic(() => import('./FetchingSetting'), {
    ssr: false,
})
