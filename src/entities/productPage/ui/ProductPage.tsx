'use client'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { ThumbsGallery } from '@/shared/ui/ThumbsGallery'
import { Rating } from '@/shared/ui/Rating'
import { StandartDropDown } from '@/shared/ui/StandartDropDown'
import { useAppSelector } from '@/shared/hooks'
import { getProductPageData } from '../model/selectors/getProduct'
import { useEffect } from 'react'
import { fetchProductById } from '../model/services/fetchProductById'
import { useAppDispatch } from '@/shared/hooks'
import { getProductPageIsLoading } from '../model/selectors/getProductPageIsLoading'

import clsx from 'clsx'
import s from './ProductPage.module.scss'

interface IProductPage {
    productId: string
}

export const ProductPage = (props: IProductPage) => {
    const { productId } = props
    const product = useAppSelector(getProductPageData)
    const isLoading = useAppSelector(getProductPageIsLoading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProductById(productId))
    }, [dispatch, productId])

    return (
        <>
            <BreadCrumbs
                current={product.name}
                breadcrumbs={[
                    { href: NavigationRoutes.main(), label: 'Главная' },
                    { href: NavigationRoutes.shop(), label: 'Магазин' },
                    {
                        href: '/shop?=' + product?.category?.[0]?.name,
                        label: product?.category?.[0]?.name,
                        onClick: () => {
                            console.log('Hello')
                        },
                    },
                    { href: '/', label: product.name, active: true },
                ]}
            />
            <section
                id="Product-Page"
                className={clsx(s.ProductPage, 'contain')}>
                <div className={s['left-col']}>
                    <ThumbsGallery
                        alt={product.name}
                        images={product.images}
                    />
                </div>
                <div className={s['right-col']}>
                    <span className={s['category-title']}>
                        {product.category?.[0]?.name}
                    </span>

                    <h1 className={s.name}>{product.name}</h1>

                    <Rating rating={4} />

                    <div className={s.price}>₽{product.price}</div>

                    <p className={s.description}>{product.description}</p>

                    <StandartDropDown title="color" />
                    <StandartDropDown title="storage" />
                    <p>{product.quantity} в наличии</p>
                </div>
            </section>
        </>
    )
}

export default ProductPage
