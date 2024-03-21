export { CustomCategoryLink } from './ui/CustomCategoryLink'

export * from './model/api/categoryApi'

export { categoryReducer } from './model/slice/categoriesSlice'
export { type ICategorySchema } from './model/types'
export {
    getCategoryData,
    getCategoryIsError,
    getCategoryIsLoading,
} from './model/selectors'
export { fetchCategories } from './model/services/fetchCategory'
