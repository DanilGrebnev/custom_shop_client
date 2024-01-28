'use client'

import { FC } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { CardByFutureCategories } from '@/shared/ui/Cards'
import { IHomePageCategory } from '@/app/types/category'
import { useSelectCategoryAndSetUSP } from '@/shared/hooks'

interface IShopByFeaturedCategoriesProps {
    className?: string
    categories: IHomePageCategory[]
}

export const ShopByFeaturedCategories: FC<IShopByFeaturedCategoriesProps> = (
    props
) => {
    const { categories } = props
    const onClick = useSelectCategoryAndSetUSP()

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
                                <CardByFutureCategories
                                    onClick={() => onClick(category)}
                                    key={i}
                                    image={category?.image}
                                    name={category?.name}
                                    amount={
                                        String(category?.productCount) || ''
                                    }
                                />
                            )
                        })}
                    </Slider>
                </ContainerWithTitle>
            </FullWidthContainer>
        </div>
    )
}
