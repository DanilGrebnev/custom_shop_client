export type ProductFilterList = {
    id?: string
    checked: boolean
    key: string
    value: string
    label: string
}

export interface IProductSchema {
    filters: ProductFilterList[]
    usp: string
}
