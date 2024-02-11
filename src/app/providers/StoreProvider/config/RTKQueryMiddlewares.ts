import { profileApi } from '@/features/userProfile'
import { basketApi } from '@/features/basket'
import { productApi } from '@/entities/productList'
import { settingApi } from '@/entities/settings'

export const RTKQueryMiddlewares = [
    profileApi.middleware,
    basketApi.middleware,
    productApi.middleware,
    settingApi.middleware,
]
