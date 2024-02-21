import { profileApi } from '@/features/userProfile'
import { basketApi } from '@/features/basket'
import { productApi } from '@/entities/productList'
import { settingApi } from '@/entities/settings'
import { homePageApi } from '@/entities/homePage'
import { combineRTKQueryMiddleware } from '../lib/combineRTKMiddleware'
import { footerApi } from '@/entities/footer'

export const RTKQueryMiddlewares = combineRTKQueryMiddleware([
    profileApi,
    basketApi,
    productApi,
    settingApi,
    homePageApi,
    footerApi,
])
