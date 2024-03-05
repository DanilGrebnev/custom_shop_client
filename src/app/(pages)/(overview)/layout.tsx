import { FooterDynamic } from '@/entities/footer'

import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

import { ILayout } from '@/app/types/layout'

import { Header } from '@/widget/Header'

const ShopLayout = ({ children }: ILayout) => {
    return (
        <>
            <ClientErrorBoundary>
                <Header />
            </ClientErrorBoundary>
            {children}
            <ClientErrorBoundary>
                <FooterDynamic />
            </ClientErrorBoundary>
        </>
    )
}

export default ShopLayout
