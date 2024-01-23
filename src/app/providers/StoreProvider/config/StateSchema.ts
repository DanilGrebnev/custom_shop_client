import { type ICategorySchema } from '@/entities/categories'
import { type IProductListSchema } from '@/entities/productList'
import { type IHomePageSchema } from '@/entities/homePage'
import { type IProductPageSchema } from '@/entities/productPage'
import { type IProductListPaginationSchema } from '@/entities/productListPagination'
import { type IFilterSideBarSchema } from '@/entities/filterSideBar'
import { type AxiosInstance } from 'axios'
import { type IProductSearchInputSchema } from '@/entities/productSearchInput'
import { type ISearchProductParamsSchema } from '@/entities/searchProductParams'
import { type IFooterSchema } from '@/entities/footer'
import { type IRegistrationSchema } from '@/features/registration/model/schema/registrationSchema'
import { ILoginSchema } from '@/features/login'
import { IUserProfileSchema } from '@/features/userProfile'
import { ISettingSchema } from '@/entities/settings'

export interface StateSchema {
    categories: ICategorySchema
    productList: IProductListSchema
    homePage: IHomePageSchema
    productPage: IProductPageSchema
    productListPagination: IProductListPaginationSchema
    filterSideBar: IFilterSideBarSchema
    productSearchInput: IProductSearchInputSchema
    searchProductParams: ISearchProductParamsSchema
    footer: IFooterSchema
    login: ILoginSchema
    registration: IRegistrationSchema
    userProfile: IUserProfileSchema
    setting: ISettingSchema
}

export interface ThunkExtraConfig {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: ThunkExtraConfig
    rejectValue: T
}
