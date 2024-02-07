import { profileApi } from '@/features/userProfile'
import { basketApi } from '@/features/basket'

export const RTKQueryMiddlewares = [profileApi.middleware, basketApi.middleware]
