import { type ICategorySchema } from '@/entities/categories'
import { type IProductListSchema } from '@/entities/productList'
import { type IHomePageSchema } from '@/entities/homePage'
import { type IProductPageSchema } from '@/entities/productPage'
import { type IProductListPaginationSchema } from '@/entities/productListPagination'
import { type IFilterSideBarSchema } from '@/entities/filterSideBar'
import { type AxiosInstance } from 'axios'
import { type IProductSearchInputSchema } from '@/entities/productSearchInput'
import { type ISearchProductParamsSchema } from '@/entities/searchProductParams'

export interface StateSchema {
    categories: ICategorySchema
    productList: IProductListSchema
    homePage: IHomePageSchema
    productPage: IProductPageSchema
    productListPagination: IProductListPaginationSchema
    filterSideBar: IFilterSideBarSchema
    productSearchInput: IProductSearchInputSchema
    searchProductParams: ISearchProductParamsSchema
}

export interface ThunkExtraConfig {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: ThunkExtraConfig
    rejectValue: T
}
