import { FC } from 'react'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { Slider } from '@/shared/ui/Slider'
import { ProductCard } from '@/shared/ui/Cards'
import { IProduct } from '@/app/types/product'
import { IHomePageProducts } from '@/app/types/homePage'
import clsx from 'clsx'
// import mock from '@/mock/mock'

interface INewProductsProps {
    className?: string
    products: IHomePageProducts[]
}

export const NewProducts: FC<INewProductsProps> = (props) => {
    const { className, products } = props

    return (
        <ContainerWithTitle
            className={clsx('mr-top', className)}
            title="Новые продукты">
            <Slider
                breakpoints="default"
                theme="theme2">
                {products?.map((product, i) => {
                    return (
                        <ProductCard
                            key={i}
                            rating={1}
                            productId={product.id}
                            name={product.name}
                            price={product.price}
                            images={product.images}
                        />
                    )
                })}
            </Slider>
        </ContainerWithTitle>
    )
}
