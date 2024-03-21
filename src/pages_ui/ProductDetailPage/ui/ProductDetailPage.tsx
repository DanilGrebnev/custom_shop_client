'use client'

import { useEffect } from 'react'

import { useGetProductByIdQuery } from '@/entities/product'
import { useGetSettingsQuery } from '@/entities/settings'

import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { PageLoader } from '@/shared/ui/LoadersSpinners'
import { Rating } from '@/shared/ui/Rating'
import { StandartDropDown } from '@/shared/ui/StandartDropDown'
import { ThumbsGallery } from '@/shared/ui/ThumbsGallery'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './ProductDetailPage.module.scss'

import { BuyButton } from '@/widget/BuyButton'
import { LikeButtonWidget } from '@/widget/LikeButton'
import clsx from 'clsx'

interface IProductPage {
    productId: number
}

export const ProductDetailPage = (props: IProductPage) => {
    const { productId } = props
    const { data: setting } = useGetSettingsQuery()

    const {
        data: product,
        isLoading,
        isError,
    } = useGetProductByIdQuery(productId)

    if (isLoading) {
        return <PageLoader />
    }

    if (isError) {
        return <h1>Ошибка получения продукта</h1>
    }

    return (
        <>
            <BreadCrumbs
                breadcrumbs={[
                    { href: NavigationRoutes.main, label: 'Главная' },
                    { href: NavigationRoutes.shop, label: 'Магазин' },
                    {
                        href: '/shop?=' + product?.category?.[0]?.name,
                        label: product?.category?.[0]?.name as string,
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
                        thumbGalleryClass={s['thumb-gallery']}
                        bigImgClass={s['big-img']}
                        smallImgClass={s['small-img']}
                    />
                </div>
                <div className={s['right-col']}>
                    <span className={s['category-title']}>
                        {product?.category?.[0]?.name}
                    </span>

                    <h1 className={s.name}>{product?.name}</h1>

                    <Rating rating={4} />

                    <div className={s.price}>
                        {setting?.currency} {product?.price}
                    </div>

                    <p className={s.description}>{product?.description}</p>

                    <StandartDropDown title="color" />
                    <StandartDropDown title="storage" />

                    <div className={s['btn-group']}>
                        <LikeButtonWidget productId={productId} />
                        <BuyButton
                            quantity={product?.quantity}
                            productId={productId}>
                            {product?.quantity === 0 && 'Товара нет в наличии'}
                        </BuyButton>
                    </div>
                    <p className={s.quantity}>{product?.quantity} в наличии</p>
                </div>
            </section>
        </>
    )
}

export default ProductDetailPage
