import { profileApi } from '@/features/userProfile'
import { basketApi } from '@/features/basket'
import { productApi } from '@/entities/productList'
import { settingApi } from '@/entities/settings'
import { homePageApi } from '@/entities/homePage'

export const RTKQueryMiddlewares = [
    profileApi.middleware,
    basketApi.middleware,
    productApi.middleware,
    settingApi.middleware,
    homePageApi.middleware,
]
