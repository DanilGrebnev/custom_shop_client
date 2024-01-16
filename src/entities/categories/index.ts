export { categoryReducer } from './model/slice/categoriesSlice'
export { type ICategorySchema } from './model/types'
export { CategoryMenuWidgetLazy } from './ui/CategoryMenuWidget/CategoryMenuWidgetLazy'
export {
    getCategoryData,
    getCategoryIsError,
    getCategoryIsLoading,
} from './model/selectors'
export { fetchCategories } from './model/services/fetchCategory'
