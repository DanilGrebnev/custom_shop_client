export interface ICategory {
    id: number
    name: string
    slug: string
    image: string
    parent: any | null
    children: []
}

export interface IHomePageCategory extends Omit<ICategory, 'children'> {
    productCount: number
}

export interface Categories {
    categoryId: string
    categoryName: string
    image: string
    parentId: string | 'null'
    filters?: boolean
}
