import dynamic from 'next/dynamic'

export const FooterDynamic = dynamic(
    () => import(/* webpackChunkName: "FooterDynamic" */ './Footer')
)
