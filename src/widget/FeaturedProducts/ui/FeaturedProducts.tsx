'use client'

import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { Slider } from '@/shared/ui/Slider'
import { ProductCard } from '@/shared/ui/Cards'
import { IHomePageProducts } from '@/app/types/HomePage'
import mock from '@/mock/mock'

interface IFeaturedProductsProps {
    products: IHomePageProducts[] | undefined
}

export const FeaturedProducts = (props: IFeaturedProductsProps) => {
    const { products } = props

    return (
        <ContainerWithTitle title="Featured Products">
            <Slider
                theme="theme2"
                breakpoints="default">
                {products?.map((product, i) => {
                    return (
                        <ProductCard
                            key={i}
                            productId={product.id}
                            name={product.name}
                            price={product.price}
                            rating={1}
                            images={product.images}
                        />
                    )
                })}
            </Slider>
        </ContainerWithTitle>
    )
}
