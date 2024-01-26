import { IFilterItem } from '@/app/types/filters'

export interface IFilterSideBarSchema {
    filters: IFilterItem[]
    filtersItem: {
        [key: string]: {
            value?: string
            defaultValue?: string
            name: string
            checked?: boolean
        }
    }
    loading: boolean
    error: any
}
