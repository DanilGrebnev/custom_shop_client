import type { Metadata } from 'next'
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { ReserveErrorComponent } from '@/shared/ui/ReserveErrorComponent'
import { ProductList } from '@/entities/productList'
import { FilterSideBar } from '@/entities/filterSideBar'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

import clsx from 'clsx'
import s from './page.module.scss'

import mock from '@/mock/mock'

export const metadata: Metadata = {
    title: 'Shop',
    description: 'Shop description',
}

export default async function ShopPage() {
    return (
        <>
            <BreadCrumbs
                current="Shop"
                breadcrumbs={[
                    { href: NavigationRoutes.main(), label: 'Home' },
                    {
                        href: NavigationRoutes.shop(),
                        label: 'Shop',
                        active: true,
                    },
                ]}
            />
            
            <section
                id="Shop-Page"
                className={clsx('contain', s['shop-page'])}>
                <ClientErrorBoundary>
                    <FilterSideBar />
                </ClientErrorBoundary>

                <ClientErrorBoundary>
                    <ProductList />
                </ClientErrorBoundary>
            </section>
        </>
    )
}
