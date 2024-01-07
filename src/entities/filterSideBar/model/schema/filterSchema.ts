import { IFilterItem } from '@/app/types/filters'

export interface IFilterSideBarSchema {
    filters: IFilterItem[]
    loading: boolean
    error: any
}
