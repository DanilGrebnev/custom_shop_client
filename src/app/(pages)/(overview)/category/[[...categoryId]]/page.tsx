import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

import { CategoryPage } from '@/pages_ui/CategoryPage'

interface Category {
    params: {
        categoryId: string[]
    }
}

export default function Category(params: Category) {
    return (
        <ClientErrorBoundary>
            <CategoryPage categoryId={params?.params?.categoryId} />
        </ClientErrorBoundary>
    )
}
