import { basketApi } from '@/features/basket'
import { profileApi, userProfileReducer } from '@/features/userProfile'

import { categoryReducer } from '@/entities/categories'
import { footerApi } from '@/entities/footer'
import { homePageApi } from '@/entities/homePage'
import { productApi, productReducer } from '@/entities/product'
import { productSearchInputReducer } from '@/entities/productSearchInput'
import { searchProductParamsReducer } from '@/entities/searchProductParams'
import { settingApi } from '@/entities/settings'

export const staticReducers = {
    categories: categoryReducer,
    product: productReducer,
    productSearchInput: productSearchInputReducer,
    searchProductParams: searchProductParamsReducer,
    userProfile: userProfileReducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [settingApi.reducerPath]: settingApi.reducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
}
