'use client'

import { FC } from 'react'

import Link from 'next/link'

import { productActions } from '@/entities/product'

import { useAppDispatch } from '@/shared/hooks'
import { CardByFutureCategories } from '@/shared/ui/Cards'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer'
import { Slider } from '@/shared/ui/Slider'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { IHomePageCategory } from '@/app/types/category'

interface IShopByFeaturedCategoriesProps {
    className?: string
    categories: IHomePageCategory[]
}

export const ShopByFeaturedCategories: FC<IShopByFeaturedCategoriesProps> = (
    props
) => {
    const { categories } = props

    return (
        <div className={'mr-top'}>
            <FullWidthContainer>
                <ContainerWithTitle title="Делайте покупки по избранным категориям">
                    <Slider
                        style={{ background: 'transparent' }}
                        breakpoints="category-slider"
                        theme="theme2">
                        {categories.map((category, i) => {
                            return (
                                <Link
                                    href={NavigationRoutes.shop}
                                    key={category.id}>
                                    <CardByFutureCategories
                                        image={category?.image}
                                        name={category?.name}
                                        amount={
                                            String(category?.productCount) || ''
                                        }
                                    />
                                </Link>
                            )
                        })}
                    </Slider>
                </ContainerWithTitle>
            </FullWidthContainer>
        </div>
    )
}
