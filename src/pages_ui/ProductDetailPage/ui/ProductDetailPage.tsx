'use client'

import { useEffect, useMemo } from 'react'

import {
    useAddProductInBasketByIdMutation,
    useGetCartQuery,
} from '@/features/basket'

import { useGetProductByIdQuery } from '@/entities/productList'
import { useGetSettingsQuery } from '@/entities/settings'

import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { BuyButton } from '@/shared/ui/Buttons/ui/BuyButton/BuyButton'
import { PageLoader } from '@/shared/ui/LoadersSpinners'
import { Rating } from '@/shared/ui/Rating'
import { StandartDropDown } from '@/shared/ui/StandartDropDown'
import { ThumbsGallery } from '@/shared/ui/ThumbsGallery'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import s from './ProductDetailPage.module.scss'

import { LikeButtonWidget } from '@/widget/LikeButton'
import clsx from 'clsx'

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
    const { data: setting } = useGetSettingsQuery()
    const { data: basket } = useGetCartQuery()
    const [fetchAddToBasket] = useAddProductInBasketByIdMutation()

    // useEffect(() => {
    //     console.clear()
    //     console.log('productId from props', productId)
    //     console.log('basket', basket)
    // }, [product, productId, basket])

    const inBasket = useMemo(() => {
        return basket?.some((product) => product.id === +productId)
    }, [productId, basket])

    if (!product || isLoading) {
        return <PageLoader />
    }

    if (isError) {
        return <h1>Ошибка получения продукта</h1>
    }

    const addToBasket = () => {
        fetchAddToBasket({
            product: +productId,
            quantity: 1,
        })
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
                        {inBasket ? (
                            <h2>В корзине</h2>
                        ) : (
                            <BuyButton onClick={addToBasket} />
                        )}
                    </div>
                    <p className={s.quantity}>{product?.quantity} в наличии</p>
                </div>
            </section>
        </>
    )
}

export default ProductDetailPage
