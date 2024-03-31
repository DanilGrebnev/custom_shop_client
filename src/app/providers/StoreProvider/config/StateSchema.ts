import { type IUserProfileSchema } from '@/features/userProfile'

import { type ICategorySchema } from '@/entities/categories'
import { type IProductSchema } from '@/entities/product'
import { type IProductSearchInputSchema } from '@/entities/productSearchInput'

import { type AxiosInstance } from 'axios'

export interface StateSchema {
    categories: ICategorySchema
    product: IProductSchema
    productSearchInput: IProductSearchInputSchema
    userProfile: IUserProfileSchema
}

export interface ThunkExtraConfig {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: ThunkExtraConfig
    rejectValue: T
}
