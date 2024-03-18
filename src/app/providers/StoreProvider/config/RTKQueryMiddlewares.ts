import { basketApi } from '@/features/basket'
import { profileApi } from '@/features/userProfile'

import { categoryApi } from '@/entities/categories'
import { footerApi } from '@/entities/footer'
import { homePageApi } from '@/entities/homePage'
import { productApi } from '@/entities/product'
import { settingApi } from '@/entities/settings'

import { combineRTKQueryMiddleware } from '../lib/combineRTKMiddleware'

export const RTKQueryMiddlewares = combineRTKQueryMiddleware([
    profileApi,
    basketApi,
    productApi,
    settingApi,
    homePageApi,
    footerApi,
    categoryApi,
])
