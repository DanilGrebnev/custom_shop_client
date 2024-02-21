'use client'

import { IProduct } from '@/app/types/product'
import { useGetCartQuery } from '@/features/basket'
import { BasketDropDownItem } from '@/features/userProfile'
import { useEffect, useState } from 'react'

export const BasketList = () => {
    const [products, setProducts] = useState<IProduct[] | null>(null)
    const { data } = useGetCartQuery()

    const fetchProducts = async () => {
        if (!data) return

        const products = await Promise.all(
            data.map(async (item) => {
                return await fetch(
                    process.env.NEXT_PUBLIC_URL_BACKEND +
                        `/api/product/${item.id}`
                ).then((data) => data.json() as Promise<IProduct>)
            })
        )
            
        setProducts(products)
    }

    useEffect(() => {
        if (!data) return
        fetchProducts()
        console.log(data)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <>
            {products?.map((product, i) => {
                return (
                    <BasketDropDownItem
                        key={i}
                        product={product}
                    />
                )
            })}
        </>
    )
}
