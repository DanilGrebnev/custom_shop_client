import type { Metadata } from 'next'
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { DynamicProductList } from '@/entities/productList'
import { FilterSideBar } from '@/entities/filterSideBar'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'
import { FilterSideBarDynamic } from '@/entities/filterSideBar'
import { Suspense } from 'react'
import {
    FilterSideBarSkeleton,
    ProductListSkeleton,
} from '@/shared/ui/Skeletons'

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
                current="Магазин"
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
                    {/* <FilterSideBar /> */}
                    <FilterSideBarDynamic />
                </ClientErrorBoundary>

                <ClientErrorBoundary>
                    <DynamicProductList />
                </ClientErrorBoundary>
            </section>
        </>
    )
}
