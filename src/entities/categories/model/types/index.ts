import { ICategory } from '@/app/types/category'

export interface ICategorySchema {
    category: ICategory[]
    isLoading?: boolean
    isError?: string
}
