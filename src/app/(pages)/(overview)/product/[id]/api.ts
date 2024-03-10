import { $axios } from '@/app/API'
import { IProduct } from '@/app/types/product'

// import mock from '@/mock/mock'

export const getProduct = async (productId: number) => {
    const res = await $axios.get<IProduct>(`product/${productId}`)
    return res.data
}

export const getProductTEST = async () => {
    const mock = (await import('@/mock/mock')).default
    return await Promise.resolve(mock.productById)
}
