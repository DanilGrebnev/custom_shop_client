'use client'

import { useGetHomePageQuery } from '@/entities/homePage'

import { useAppDispatch } from '@/shared/hooks'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'
import { HomePageSkeleton } from '@/shared/ui/Skeletons'

import { BestsellerProducts } from '@/widget/BestsellerProducts'
import { FeaturedProducts } from '@/widget/FeaturedProducts'
import { FeedBackBlock } from '@/widget/FeedBackBlock'
import { NewProducts } from '@/widget/NewProducts'
import { ShopByFeaturedCategoriesDynamic } from '@/widget/ShopByFeaturedCategories'
import { TopSlider } from '@/widget/TopSlider'

export const HomePage = () => {
    const { data: homePageData, isLoading } = useGetHomePageQuery()

    if (isLoading || !homePageData) {
        return <HomePageSkeleton />
    }

    return (
        <section id="Home-Page">
            <ClientErrorBoundary className="contain">
                <TopSlider sliderImages={homePageData?.sliderImages} />
            </ClientErrorBoundary>

            <ClientErrorBoundary className="contain">
                <FeaturedProducts products={homePageData?.featureProducts} />
            </ClientErrorBoundary>

            <ClientErrorBoundary className="contain">
                <NewProducts products={homePageData?.newProducts} />
            </ClientErrorBoundary>

            <ClientErrorBoundary className="contain">
                <FeedBackBlock comments={homePageData?.comments} />
            </ClientErrorBoundary>

            <ClientErrorBoundary className="contain">
                <BestsellerProducts
                    products={homePageData?.bestsellerProducts}
                />
            </ClientErrorBoundary>

            <ClientErrorBoundary className="contain">
                <ShopByFeaturedCategoriesDynamic
                    categories={homePageData?.featuredCategories}
                />
            </ClientErrorBoundary>
        </section>
    )
}

HomePage.displayName = 'HomePage'
