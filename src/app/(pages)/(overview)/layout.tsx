import { Header } from '@/widget/Header'
import { ILayout } from '@/app/types/layout'
import { FooterDynamic } from '@/entities/footer'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

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
