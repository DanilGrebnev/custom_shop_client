import {
    CategoryIdContextProvider,
    DynamicProductBlock,
    PreviewProviderDynamic,
    ProductFilter,
} from '@/entities/product'

import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './ShopPapge.module.scss'

import clsx from 'clsx'

export const ShopPage = ({ categoryId }: { categoryId: string }) => {
    return (
        <>
            <BreadCrumbs
                breadcrumbs={[
                    { href: NavigationRoutes.main, label: 'Главная' },
                    {
                        href: NavigationRoutes.shop,
                        label: 'Магазин',
                        active: true,
                    },
                ]}
            />

            <section
                id="Shop-Page"
                className={clsx('contain', s['shop-page'])}>
                <ClientErrorBoundary>
                    <ProductFilter
                        categoryId={categoryId}
                        className={s.productFilter}
                    />
                </ClientErrorBoundary>
                <ClientErrorBoundary>
                    <CategoryIdContextProvider categoryId={categoryId}>
                        <PreviewProviderDynamic>
                            <DynamicProductBlock />
                        </PreviewProviderDynamic>
                    </CategoryIdContextProvider>
                </ClientErrorBoundary>
            </section>
        </>
    )
}
