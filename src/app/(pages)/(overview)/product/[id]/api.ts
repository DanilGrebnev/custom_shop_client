import { IProduct } from '@/app/types/Product'
import { $axios } from '@/app/API'
import mock from '@/mock/mock'

export const getProduct = async (productId: string) => {
    const res = await $axios.get<IProduct>(`product/${productId}`)
    return res.data
}

export const getProductTEST = async () => {
    return await Promise.resolve(mock.productById)
}
