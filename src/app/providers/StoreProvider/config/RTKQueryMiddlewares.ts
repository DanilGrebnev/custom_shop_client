import { profileApi } from '@/features/userProfile'
import { basketApi } from '@/features/basket'
import { productApi } from '@/entities/productList'
import { settingApi } from '@/entities/settings'
import { homePageApi } from '@/entities/homePage'
import { combineRTKQueryMiddleware } from '../lib/combineRTKMiddleware'

export const RTKQueryMiddlewares = combineRTKQueryMiddleware([
    profileApi,
    basketApi,
    productApi,
    settingApi,
    homePageApi,
])
