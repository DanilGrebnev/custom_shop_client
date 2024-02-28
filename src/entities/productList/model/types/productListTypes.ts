export type ProductFilterList = {
    id?: string
    checked: boolean
    key: string
    value: string
}

export interface IProductSchema {
    filters: ProductFilterList[]
    usp: string
}
