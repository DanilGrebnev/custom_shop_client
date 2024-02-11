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
import { loginReducer } from '@/features/login'
import { userProfileReducer, profileApi } from '@/features/userProfile'
import { settingApi, settingReducer } from '@/entities/settings'
import { basketApi } from '@/features/basket'
import { productApi } from '@/entities/productList'

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
    login: loginReducer,
    registration: registrationReducer,
    userProfile: userProfileReducer,
    setting: settingReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [settingApi.reducerPath]: settingApi.reducer,
}
