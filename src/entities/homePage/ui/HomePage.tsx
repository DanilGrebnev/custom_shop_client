'use client'

import { TopSlider } from '@/widget/TopSlider'
import { FeaturedProducts } from '@/widget/FeaturedProducts'
import { NewProducts } from '@/widget/NewProducts'
import { FeedBackBlock } from '@/widget/FeedBackBlock'
import { BestsellerProducts } from '@/widget/BestsellerProducts'
import { ShopByFeaturedCategories } from '@/widget/ShopByFeaturedCategories'
import { fetchHomePageData } from '../model/services/fetchHomePageData'
import { useAppDispatch } from '@/shared/hooks'
import { useAppSelector } from '@/shared/hooks'
import { useEffect } from 'react'
import { HomePageSelectors } from '../model/selectors'
import { HomePageSkeleton } from '@/shared/ui/Skeletons'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

export const HomePage = () => {
    const dispatch = useAppDispatch()
    const homePageData = useAppSelector(HomePageSelectors.getHomePageData)
    const isLoading = useAppSelector(HomePageSelectors.getIsLoadingHomePage)

    useEffect(() => {
        dispatch(fetchHomePageData())
    }, [dispatch])

    if (isLoading) {
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
                <ShopByFeaturedCategories
                    categories={homePageData?.featuredCategories}
                />
            </ClientErrorBoundary>
        </section>
    )
}

HomePage.displayName = 'HomePage'
