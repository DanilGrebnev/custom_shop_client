export type ICheckedFilters = {
    id: string
    checked: boolean
    key: string
    value: string
    label: string
}

export type IRangeFilters = {
    id: string
    value1: string
    value2: string
    key1: string
    key2: string
}

export type IProductFilterList = Array<ICheckedFilters | IRangeFilters>

export interface IProductSchema {
    filters: IProductFilterList
    usp: string
}
