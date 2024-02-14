'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { ThumbsGallery } from '@/shared/ui/ThumbsGallery'
import { Rating } from '@/shared/ui/Rating'
import { StandartDropDown } from '@/shared/ui/StandartDropDown'
import { useGetSettingsQuery } from '@/entities/settings'
import { BuyButton } from '@/shared/ui/Buttons/ui/BuyButton/BuyButton'
import { LikeButtonWidget } from '@/widget/LikeButton'
import { PageLoader } from '@/shared/ui/LoadersSpinners'
import { useGetProductByIdQuery } from '@/entities/productList'

import clsx from 'clsx'
import s from './ProductDetailPage.module.scss'

interface IProductPage {
    productId: string
}

export const ProductDetailPage = (props: IProductPage) => {
    const { productId } = props

    const {
        data: product,
        isLoading,
        isError,
    } = useGetProductByIdQuery(productId)

    const { currency } = useGetSettingsQuery(undefined, {
        selectFromResult: (result) => ({ currency: result?.data?.currency }),
    })

    if (!product || isLoading) {
        return <PageLoader />
    }

    if (isError) {
        return <h1>Ошибка получения продукта</h1>
    }

    return (
        <>
            <BreadCrumbs
                breadcrumbs={[
                    { href: NavigationRoutes.main(), label: 'Главная' },
                    { href: NavigationRoutes.shop(), label: 'Магазин' },
                    {
                        href: '/shop?=' + product?.category?.[0]?.name,
                        label: product?.category?.[0]?.name as string,
                        onClick: () => {
                            console.log('Hello')
                        },
                    },
                    { href: '/', label: product?.name as string, active: true },
                ]}
            />
            <section
                id="Product-Page"
                className={clsx(s.ProductPage, 'contain')}>
                <div className={s['left-col']}>
                    <ThumbsGallery
                        alt={product?.name}
                        images={product?.images}
                    />
                </div>
                <div className={s['right-col']}>
                    <span className={s['category-title']}>
                        {product?.category?.[0]?.name}
                    </span>

                    <h1 className={s.name}>{product?.name}</h1>

                    <Rating rating={4} />

                    <div className={s.price}>
                        {currency} {product?.price}
                    </div>

                    <p className={s.description}>{product?.description}</p>

                    <StandartDropDown title="color" />
                    <StandartDropDown title="storage" />

                    <div className={s['btn-group']}>
                        <LikeButtonWidget productId={productId} />
                        <BuyButton />
                    </div>
                    <p className={s.quantity}>{product?.quantity} в наличии</p>
                </div>
            </section>
        </>
    )
}

export default ProductDetailPage
