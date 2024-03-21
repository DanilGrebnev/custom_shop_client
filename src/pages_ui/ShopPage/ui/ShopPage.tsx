import {
    DynamicProductList,
    PreviewProviderDynamic,
    ProductFilter,
} from '@/entities/product'

import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './ShopPapge.module.scss'

import clsx from 'clsx'

export const ShopPage = ({ categoryId }: { categoryId: string }) => {
    console.log(categoryId)

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
                    <ProductFilter className={s.productFilter} />
                </ClientErrorBoundary>
                <ClientErrorBoundary>
                    <PreviewProviderDynamic>
                        <DynamicProductList />
                    </PreviewProviderDynamic>
                </ClientErrorBoundary>
            </section>
        </>
    )
}
