import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'
import { FilterSideBarDynamic } from '@/entities/filterSideBar'
import { DynamicProductList } from '@/entities/productList'

import s from './ShopPapge.module.scss'
import clsx from 'clsx'

export const ShopPage = () => {
    return (
        <>
            <BreadCrumbs
                style={{ marginBottom: '2em' }}
                breadcrumbs={[
                    { href: NavigationRoutes.main(), label: 'Главная' },
                    {
                        href: NavigationRoutes.shop(),
                        label: 'Магазин',
                        active: true,
                    },
                ]}
            />

            <section
                id="Shop-Page"
                className={clsx('contain', s['shop-page'])}>
                <ClientErrorBoundary>
                    <FilterSideBarDynamic />
                </ClientErrorBoundary>

                <ClientErrorBoundary>
                    <DynamicProductList />
                </ClientErrorBoundary>
            </section>
        </>
    )
}
