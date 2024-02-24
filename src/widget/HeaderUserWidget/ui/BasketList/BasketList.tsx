'use client'

import { IProduct } from '@/app/types/product'
import { useGetCartQuery } from '@/features/basket'
import { BasketDropDownItem } from '@/features/userProfile'
import { useFetchData } from '@/shared/hooks/useFetchData'
import { useEffect, useState } from 'react'

export const BasketList = () => {
    const [products, setProducts] = useState<IProduct[] | null>(null)

    const { fetchData } = useFetchData<IProduct>({
        url: process.env.NEXT_PUBLIC_URL_BACKEND,
    })

    const { data } = useGetCartQuery()

    const fetchProducts = async () => {
        if (!data) return

        const products = data.map(async (item) => {
            return await fetchData(`/api/product/${item.id}`).then(
                ({ payload }) => {
                    return payload
                }
            )
        })
        const productResult = await Promise.allSettled(products)
        // console.log('productResult', productResult)

        const filtered = productResult
            .filter((promise) => {
                if (promise.status === 'fulfilled') {
                    return promise
                }
            })
            .map(
                (promise) =>
                    (promise as { status: string; value: IProduct }).value
            )

        setProducts(filtered)
    }

    useEffect(() => {
        if (!data) return
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    // useEffect(() => {
    //     console.log('products', products)
    // }, [products])

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
