import { type IUserProfileSchema } from '@/features/userProfile'

import { type ICategorySchema } from '@/entities/categories'
import { type ProductSchema } from '@/entities/product'

import { type AxiosInstance } from 'axios'

export interface StateSchema {
    categories: ICategorySchema
    product: ProductSchema
    userProfile: IUserProfileSchema
}

export interface ThunkExtraConfig {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: ThunkExtraConfig
    rejectValue: T
}
