'use client'

import { FC } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { CardByFutureCategories } from '@/shared/ui/Cards'
import { IHomePageCategory } from '@/app/types/category'

import { getData } from '@/mock/mock'

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
                <ContainerWithTitle title="Shop by Featured Categories">
                    <Slider
                        style={{ background: 'transparent' }}
                        breakpoints="category-slider"
                        theme="theme2">
                        {categories.map((props, i) => {
                            return (
                                <CardByFutureCategories
                                    key={i}
                                    image={props?.image}
                                    name={props?.name}
                                    amount={String(props?.productCount) || ''}
                                />
                            )
                        })}
                    </Slider>
                </ContainerWithTitle>
            </FullWidthContainer>
        </div>
    )
}
