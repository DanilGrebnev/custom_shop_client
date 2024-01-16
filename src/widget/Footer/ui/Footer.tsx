import { Footer as FooterEntities } from '@/entities/footer'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

export const Footer = () => {
    return (
        <ClientErrorBoundary>
            <FooterEntities />
        </ClientErrorBoundary>
    )
}
