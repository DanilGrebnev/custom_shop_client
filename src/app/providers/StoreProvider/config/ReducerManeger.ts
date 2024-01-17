import { productSearchInputReducer } from '@/entities/productSearchInput'
import { categoryReducer } from '@/entities/categories'
import { filterSidebarReducer } from '@/entities/filterSideBar'
import { homePageReducer } from '@/entities/homePage'
import { productListReducer } from '@/entities/productList'
import { productListPaginationReducer } from '@/entities/productListPagination'
import { productPageReducer } from '@/entities/productPage'
import { searchProductParamsReducer } from '@/entities/searchProductParams'
import { footerReducer } from '@/entities/footer'
import { registrationReducer } from '@/features/registration'

export const staticReducers = {
    categories: categoryReducer,
    productList: productListReducer,
    homePage: homePageReducer,
    productPage: productPageReducer,
    productListPagination: productListPaginationReducer,
    filterSideBar: filterSidebarReducer,
    productSearchInput: productSearchInputReducer,
    searchProductParams: searchProductParamsReducer,
    footer: footerReducer,
    registration: registrationReducer,
}
