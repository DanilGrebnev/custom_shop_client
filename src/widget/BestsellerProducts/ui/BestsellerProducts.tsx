import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { Slider } from '@/shared/ui/Slider'
import { ProductCard } from '@/shared/ui/Cards'

import clsx from 'clsx'
import { IHomePageProducts } from '@/app/types/homePage'
import mock from '@/mock/mock'

interface IBestsellerProducts {
    products: IHomePageProducts[]
}

export const BestsellerProducts = (props: IBestsellerProducts) => {
    const { products } = props

    return (
        <ContainerWithTitle
            className={clsx('mr-top')}
            title="Рекумендуемое">
            <Slider
                theme="theme2"
                breakpoints="default">
                {products?.map((product, i) => {
                    return (
                        <ProductCard
                            key={i}
                            rating={1}
                            name={product?.name}
                            price={product?.price}
                            productId={product.id}
                            images={product?.images}
                        />
                    )
                })}
            </Slider>
        </ContainerWithTitle>
    )
}
