import { type IUserProfileSchema } from '@/features/userProfile'

import { type ICategorySchema } from '@/entities/categories'
import { type IProductSchema } from '@/entities/productList'
import { type IProductSearchInputSchema } from '@/entities/productSearchInput'
import { type ISearchProductParamsSchema } from '@/entities/searchProductParams'

import { type AxiosInstance } from 'axios'

export interface StateSchema {
    categories: ICategorySchema
    product: IProductSchema
    productSearchInput: IProductSearchInputSchema
    searchProductParams: ISearchProductParamsSchema
    userProfile: IUserProfileSchema
}

export interface ThunkExtraConfig {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: ThunkExtraConfig
    rejectValue: T
}
