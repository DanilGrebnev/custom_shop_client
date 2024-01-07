import { $axios } from '@/app/API'
import { IProduct } from '@/app/types/Product'
import { IShopResponse } from '@/app/types/Shop'
import mock from '@/mock/mock'

export const getAllProducts = async () => {
    const res = await $axios.get<IShopResponse>('products')
    return res.data
}

export const getAllProductsTEST = async () => {
    return await Promise.resolve()
}
