'use client'

import { FC } from 'react'

import Link from 'next/link'

import { productActions } from '@/entities/productList/model/slice/productSlice'

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
    const dispatch = useAppDispatch()

    const onClick = (id: string) => {
        dispatch(productActions.changeCheckedValue({ id, checked: true }))
    }

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
                                    key={i}>
                                    <CardByFutureCategories
                                        onClick={onClick.bind(
                                            null,
                                            category.name
                                        )}
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
